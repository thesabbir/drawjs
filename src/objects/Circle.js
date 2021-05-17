import { Shape } from "./Shape";
import { CIRCLE_TYPE } from "../constants";

export class Circle extends Shape {
  constructor(x, y, r) {
    super();
    this.type = CIRCLE_TYPE;
    this.setAttributes({
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
    return new Circle(...Object.values(this.attributes));
  }
}
