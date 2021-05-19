import { Shape } from "./Shape";
import { PATH_TYPE } from "../constants";

export class Path extends Shape {
  constructor(d = "") {
    super(PATH_TYPE, PATH_TYPE, { d });
  }

  set d(d: string) {
    this.setAttributes({ d });
  }

  get d() {
    return this.attr.d || "";
  }

  clone() {
    return new Path(this.attr.d);
  }
}
