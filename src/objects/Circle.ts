import { Shape } from "./Shape";
import { CIRCLE_TYPE } from "../constants";

export class Circle extends Shape {
  constructor(x = 0, y = 0, r = 0) {
    super(CIRCLE_TYPE, {
      x,
      y,
      r,
    });
  }

  set r(r) {
    this.setAttributes({ r });
  }

  get r() {
    return this.attributes.r;
  }

  set x(x) {
    this.setAttributes({ x });
  }

  get x() {
    return this.attributes.x;
  }

  set y(y) {
    this.setAttributes({ y });
  }

  get y() {
    return this.attributes.y;
  }

  transformAttributes() {
    const { x, y, ...attributes } = this.attributes;
    return {
      cx: x,
      cy: y,
      ...attributes,
    };
  }

  clone() {
    return new Circle(this.attributes.x, this.attributes.y, this.attributes.r);
  }
}
