import { Shape } from "./Shape";
import type { ShapeChildren } from "./types";

export class ShapeContainer extends Shape {
  private readonly _children: Map<Shape, Shape>;
  private _active: boolean;
  private _visible: boolean;

  constructor(name: string, type: string, attr = {}) {
    super(name, type, attr);
    this._children = new Map();
    this._active = false;
    this._visible = true;
  }
  set active(active) {
    this._active = active;
  }

  get active() {
    return this._active;
  }

  addChildren(children: Shape) {
    this._children.set(children, children);
  }

  get children(): Shape[] {
    return Array.from(this._children, ([_, values]) => values);
  }

  drawShape() {}

  toObject(): ShapeChildren {
    return {
      type: this.type,
      name: this.name,
      attr: this.attr,
      children: this.children.map((child: Shape) => child.toObject()),
    };
  }
}
