import { NAMESPACE } from "../constants";
import { setAttributes } from "./toSVG";
import type { Attributes } from "../objects/Shape";

export default function createSVG(
  attributes: Attributes<any> = {}
): SVGElement {
  const svg = document.createElementNS(NAMESPACE, "svg");
  svg.setAttribute("xmlns", NAMESPACE);
  setAttributes(svg, attributes);
  return svg;
}
