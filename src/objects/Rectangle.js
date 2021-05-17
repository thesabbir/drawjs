import { Shape } from "./Shape";
import { RECT_TYPE } from "../constants";

export class Rectangle extends Shape {
  constructor(x, y, height, width) {
    super();
    super.setAttributes({
      x,
      y,
      height,
      width,
    });
    this.type = RECT_TYPE;
  }

  set height(height) {
    this.setAttributes({ height });
  }

  set width(width) {
    this.setAttributes({ width });
  }

  get height() {
    return this.attributes.height;
  }

  get width() {
    return this.attributes.width;
  }

  set x(x) {
    this.setAttributes({ x });
  }

  set y(y) {
    this.setAttributes({ y });
  }

  clone() {
    return new Rectangle(...Object.values(this.attributes));
  }
}
