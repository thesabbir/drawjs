import { Shape } from "./Shape";
import { PATH_TYPE } from "../constants";

export class Path extends Shape {
  constructor(d) {
    super();
    this.type = PATH_TYPE;
    this.setAttributes({ d });
  }

  set d(d) {
    this.setAttributes({ d });
  }

  get d() {
    return this.attributes.d;
  }

  clone() {
    return new Path(...Object.values(this.attributes));
  }
}
