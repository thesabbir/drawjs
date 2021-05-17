import { Shape } from "./Shape";
import { RECT_TYPE } from "../constants";

export class Rectangle extends Shape {
  constructor(x = 0, y = 0, height = 0, width = 0) {
    super(RECT_TYPE, {
      x,
      y,
      height,
      width,
    });
  }

  get height() {
    return this.attributes.height;
  }
  set height(height: number) {
    this.setAttributes({ height });
  }

  set width(width: number) {
    this.setAttributes({ width });
  }

  get width() {
    return this.attributes.width;
  }

  set x(x: number) {
    this.setAttributes({ x });
  }

  set y(y: number) {
    this.setAttributes({ y });
  }

  clone() {
    return new Rectangle(
      this.attributes.x,
      this.attributes.y,
      this.attributes.height,
      this.attributes.width
    );
  }
}
