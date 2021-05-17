import { Shape } from "./Shape";
import { CIRCLE_TYPE } from "../constants";

export class Circle extends Shape {
  constructor(x, y, r) {
    super(x, y);
    this._type = CIRCLE_TYPE;
    this._attributes = this._attributes || {};
    this._attributes.r = r;
  }

  set r(r) {
    this._attributes.r = r;
  }

  get r() {
    return this._attributes.r;
  }

  toObject() {
    return {
      type: this._type,
      uuid: this.uuid,
      attributes: this.attributes,
    };
  }

  clone() {
    return new Circle(
      this._attributes.x,
      this._attributes.y,
      this._attributes.r
    );
  }
}
