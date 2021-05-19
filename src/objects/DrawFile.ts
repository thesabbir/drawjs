import { SVG_TYPE } from "../constants";
import { ShapeContainer } from "./ShapeContainer";
import type { Shape } from "./Shape";
import type { ShapeChildren } from "./types";
import { Layer } from "./Layer";
import { render, mount, diff } from "../vdom";

export class DrawFile extends ShapeContainer {
  private _state: {};
  activeLayer: Layer;
  vTree: ShapeChildren;
  _rootElm: HTMLElement;
  _svgFile: SVGElement;

  constructor(name = "Untitled.svg", rootElm: HTMLElement) {
    super(name, SVG_TYPE);
    this._state = {};
    this.activeLayer = new Layer(`Layer ${this.children.length + 1}`);
    this.addLayer(this.activeLayer);
    this._rootElm = rootElm;
    this.vTree = this.toObject();
    this._svgFile = render(this.vTree);
    this.mountFile();
  }

  get state() {
    return this._state;
  }

  set state(data) {
    this._state = data;
  }

  addLayer(layer: Layer) {
    this.addChildren(layer);
    this.activeLayer = layer;
  }

  toObject(): ShapeChildren {
    return {
      name: this.name,
      type: this.type,
      attr: this.attr,
      children: this.children.map((layer) => layer.toObject()),
    };
  }

  private mountFile() {
    this._rootElm = mount(this._svgFile, this._rootElm);
  }

  draw(shape: Shape) {
    this.activeLayer.draw(shape, this._updateFile.bind(this));
  }

  private _updateFile() {
    const newTree = this.toObject();
    const patch = diff(this.vTree, newTree);
    this._svgFile = patch(this._svgFile);
    this.vTree = newTree;
  }
}
