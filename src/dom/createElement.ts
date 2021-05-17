import { NAMESPACE } from "../constants";

export default function createElement(type: string): SVGElement {
  return document.createElementNS(NAMESPACE, type);
}
