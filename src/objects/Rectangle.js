import { Shape } from "./Shape";
import { RECT_TYPE } from "../constants";

export class Rectangle extends Shape {
  constructor(x, y, height, width) {
    super(x, y);
    this._type = RECT_TYPE;
    this._attributes = this._attributes || {};
    this._attributes.height = height;
    this._attributes.width = width;
  }

  set height(height) {
    this._attributes.height = height;
  }

  set width(width) {
    this._attributes.width = width;
  }

  get height() {
    return this._attributes.height;
  }
  get width() {
    return this._attributes.width;
  }

  toObject() {
    return {
      type: this._type,
      uuid: this.uuid,
      attributes: this.attributes,
    };
  }

  clone() {
    return new Rectangle(
      this._attributes.x,
      this._attributes.y,
      this._attributes.height,
      this._attributes.width
    );
  }
}
