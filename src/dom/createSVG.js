import { NAMESPACE } from "../constants";
import { setAttributes } from "./toSVG";

export default function createSVG(attributes = {}) {
  const svg = document.createElementNS(NAMESPACE, "svg");
  svg.setAttribute("xmlns", NAMESPACE);
  setAttributes(svg, attributes);
  return svg;
}
