import { genUUID } from "../helpers";

export class Shape {
  constructor() {
    this._uuid = genUUID();
    this._attributes = {};
    this._type = null;
    return new Proxy(this, {
      set: (target, key, value) => {
        target[key] = value;
        target.onViewUpdate(target);
        return true;
      },
    });
  }

  get attributes() {
    return this._attributes;
  }

  setAttributes(attributes) {
    this._attributes = {
      ...this._attributes,
      ...attributes,
    };
  }

  set fill(fill) {
    this.setAttributes({ fill });
  }

  set stroke(stroke) {
    this.setAttributes({ stroke });
  }

  set strokeWidth(strokeWidth) {
    this.setAttributes({ strokeWidth });
  }

  set transform(transform) {
    this.setAttributes({ transform });
  }

  get uuid() {
    return this._uuid;
  }

  set type(type) {
    this._type = type;
  }

  get type() {
    return this._type;
  }

  transformAttributes() {
    return this.attributes;
  }

  toObject() {
    return {
      type: this._type,
      uuid: this.uuid,
      attributes: this.transformAttributes(),
    };
  }

  onViewUpdate() {}
}
