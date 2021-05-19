import { Shape } from "./Shape";
import { CIRCLE_TYPE } from "../constants";

export class Circle extends Shape {
  constructor(x = 0, y = 0, r = 0) {
    super(CIRCLE_TYPE, CIRCLE_TYPE, {
      x,
      y,
      r,
    });
  }

  set r(r: number) {
    this.setAttributes({ r });
  }

  get r() {
    return this.attr.r || 0;
  }

  set x(x: number) {
    this.setAttributes({ x });
  }

  get x() {
    return this.attr.x || 0;
  }

  set y(y: number) {
    this.setAttributes({ y });
  }

  get y() {
    return this.attr.y || 0;
  }

  transformAttributes() {
    const { x, y, ...attr } = this.attr;
    return {
      cx: x,
      cy: y,
      ...attr,
    };
  }

  clone() {
    return new Circle(this.attr.x, this.attr.y, this.attr.r);
  }
}
