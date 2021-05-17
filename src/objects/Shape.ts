import { genUUID } from "../helpers";

export interface Attributes<T> {
  // Fixme
  [key: string]: T;
}

export interface ShapeObject {
  type: string;
  attributes: Attributes<any>;
}

export class Shape {
  private readonly _uuid: string;
  private readonly _type: string;
  private _attributes: Attributes<any>;

  constructor(type: string, attributes: Attributes<any>) {
    this._uuid = genUUID();
    this._type = type;
    this._attributes = attributes;
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

  get attributes(): Attributes<any> {
    return {
      id: this.uuid,
      ...this._attributes,
    };
  }

  setAttributes(attributes: object) {
    this._attributes = {
      ...this._attributes,
      ...attributes,
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

  get uuid() {
    return this._uuid;
  }

  get type() {
    return this._type;
  }

  transformAttributes() {
    return this.attributes;
  }

  toObject(): ShapeObject {
    return {
      type: this._type,
      attributes: this.transformAttributes(),
    };
  }

  onViewUpdate() {}
}
