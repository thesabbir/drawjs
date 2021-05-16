import { LAYER_TYPE } from "../constants";
import { eachToObject, genUUID, mapToArray } from "../helpers";

export class Layer {
  constructor(name = "new layer") {
    this._name = name;
    this._type = LAYER_TYPE;
    this._uuid = genUUID();
    this._children = {};
    this._activeChildren = null;
    this._active = false;
    this._attributes = {};
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set active(active) {
    this._active = active;
  }

  get active() {
    return this._active;
  }

  get attributes() {
    return this._attributes;
  }

  set attributes(attributes) {
    this._attributes = {
      ...this._attributes,
      ...attributes,
    };
  }

  get uuid() {
    return this._uuid;
  }

  addChildren(children) {
    this._children[children.uuid] = children;
    this.activeChildren = children;
  }

  set activeChildren(children) {
    this._activeChildren = children.uuid;
  }

  get activeChildren() {
    return this._children[this._activeChildren];
  }

  get children() {
    return mapToArray(this._children);
  }

  toObject() {
    return {
      type: this._type,
      uuid: this._uuid,
      name: this._name,
      children: eachToObject(this.children),
    };
  }
}
