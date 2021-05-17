import { Layer, LayerObject } from "./Layer";
import { toSVGView } from "../dom/toSVG";
import { genUUID } from "../helpers";
import type { Shape } from "../objects/Shape";

export interface DrawFileObject {
  name: string;
  id: string;
  layers: LayerObject[];
}

export class DrawFile {
  private _name: string;
  private _state: {};
  private _activeLayer: Layer;
  private readonly _layers: Map<Layer, Layer>;
  private readonly _uuid: string;

  constructor(name = "Untitled.svg") {
    this._name = name;
    this._state = {};
    this._activeLayer = new Layer("layer 1");
    this._layers = new Map<Layer, Layer>();
    this._uuid = genUUID();
    this._layers.set(this._activeLayer, this._activeLayer);
  }

  get state() {
    return this._state;
  }

  set state(data) {
    this._state = data;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }
  get uuid() {
    return this._uuid;
  }

  get layers() {
    return Array.from(this._layers, ([_, value]) => value);
  }

  get activeLayer(): Layer {
    return this._activeLayer;
  }

  set activeLayer(layer: Layer) {
    this._activeLayer = layer;
  }

  addLayer(layer = new Layer()) {
    this._layers.set(layer, layer);
    this.activeLayer = layer;
  }

  draw(shape: Shape, requestRender: Function) {
    this.activeLayer.addChildren(shape);
    shape.onViewUpdate = () => requestRender();
  }

  toObject(): DrawFileObject {
    return {
      name: this.name,
      id: this.uuid,
      layers: this.layers.map((layer: Layer) => layer.toObject()),
    };
  }

  toSVG() {
    const svg = toSVGView(this.toObject());
    svg.setAttribute("style", `height:100%;width:100%`);
    return svg;
  }
}
