import { LAYER_TYPE } from "../constants";
import { genUUID } from "../helpers";
import type { Shape, ShapeObject } from "../objects/Shape";

export interface LayerObject {
  type: string;
  name: string;
  attributes: any;
  children: ShapeObject[];
}

export class Layer {
  private _name: string;
  private readonly _type: string;
  private readonly _uuid: string;
  private readonly _children: Map<Shape, Shape>;
  private _activeChildren: Shape | any;
  private _active: boolean;
  private _attributes: {};

  constructor(name = "new layer") {
    this._name = name;
    this._type = LAYER_TYPE;
    this._uuid = genUUID();
    this._children = new Map();
    this._activeChildren = false;
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
    return {
      ...this._attributes,
      id: this.uuid,
    };
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

  addChildren(children: Shape) {
    this._children.set(children, children);
    this.activeChildren = children;
  }

  set activeChildren(children: Shape) {
    this._activeChildren = children;
  }

  get activeChildren(): Shape {
    return this._activeChildren;
  }

  get children(): Shape[] {
    return Array.from(this._children, ([_, values]) => values);
  }

  toObject(): LayerObject {
    return {
      type: this._type,
      name: this._name,
      attributes: this.attributes,
      children: this.children.map((child: Shape) => child.toObject()),
    };
  }
}
