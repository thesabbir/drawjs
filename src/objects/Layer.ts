import { LAYER_TYPE } from "../constants";
import { ShapeContainer } from "./ShapeContainer";
import type { Shape } from "./Shape";

export class Layer extends ShapeContainer {
  private activeShape: Shape | boolean;
  constructor(name = "New Layer") {
    super(name, LAYER_TYPE);
    this.activeShape = false;
  }

  addShape(shape: Shape) {
    this.addChildren(shape);
    this.activeShape = shape;
  }

  draw(shape: Shape, requestRender: Function) {
    this.addShape(shape);
    shape.onViewUpdate = () => requestRender();
    requestRender();
  }
}
