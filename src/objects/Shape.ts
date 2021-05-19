import { genUUID } from "../helpers";
import type { Attributes, ShapeObject } from "./types";

export class Shape {
  private readonly _uuid: string;
  private readonly _type: string;
  private _attr: Attributes;
  private _name: string;

  constructor(name: string, type: string, attr: Attributes = {}) {
    this._uuid = genUUID();
    this._type = type;
    this._name = name;
    this._attr = attr;
    return new Proxy(this, {
      set: (target: Shape, key: keyof Shape, value) => {
        if (target[key] !== null) {
          // @ts-ignore
          target[key] = value;
          target.onViewUpdate();
        }
        return true;
      },
    });
  }

  get attr(): Attributes {
    return {
      id: this.uuid,
      ...this._attr,
    };
  }

  setAttributes(attr: Attributes) {
    this._attr = {
      ...this._attr,
      ...attr,
    };
  }

  set fill(fill: string) {
    this.setAttributes({ fill });
  }

  set stroke(stroke: number) {
    this.setAttributes({ stroke });
  }

  set strokeWidth(strokeWidth: number) {
    this.setAttributes({ strokeWidth });
  }

  set transform(transform: string) {
    this.setAttributes({ transform });
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

  get type() {
    return this._type;
  }

  transformAttributes() {
    return this.attr;
  }

  toObject(): ShapeObject {
    return {
      name: this.name,
      type: this.type,
      attr: this.transformAttributes(),
    };
  }

  onViewUpdate() {}
}
