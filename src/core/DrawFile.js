import { Layer } from "./Layer";
import { toSVGView } from "../dom/toSVG";
import { eachToObject, genUUID, mapToArray } from "../helpers";

export class DrawFile {
  constructor(name = "Untitled.svg") {
    this._name = name;
    this._state = {};
    this._layers = {};
    this._activeLayer = null;
    this._uuid = genUUID();
    this.setup();
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
    return mapToArray(this._layers);
  }

  get activeLayer() {
    return this._layers[this._activeLayer];
  }

  set activeLayer(layer) {
    this._activeLayer = layer.uuid;
  }

  addLayer(layer = new Layer()) {
    this._layers[layer.uuid] = layer;
    this.activeLayer = layer;
  }

  draw(shape, requestRender) {
    this.activeLayer.addChildren(shape);
    shape.onViewUpdate = () => requestRender();
  }

  toObject() {
    return {
      name: this.name,
      uuid: this.uuid,
      layers: eachToObject(this.layers),
    };
  }

  toSVG() {
    const svg = toSVGView(this.toObject());
    svg.setAttribute("style", `height:100%;width:100%`);
    return svg;
  }

  setup() {
    this.addLayer(new Layer("layer 1"));
  }
}
