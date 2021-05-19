export interface ShapeObject {
  type: string;
  name?: string;
  attr: Attributes;
}
export interface ShapeChildren extends ShapeObject {
  children: object[];
}

export interface Attributes {
  [index: string]: any;
  id?: string;
  x?: number;
  y?: number;
  stroke?: number;
  fill?: string;
  d?: string;
  height?: number;
  width?: number;
  r?: number;
  strokeWidth?: number;
  transform?: string;
}

export interface FileObject extends ShapeChildren {}
