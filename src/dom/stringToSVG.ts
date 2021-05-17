import { NAMESPACE } from "../constants";

export default function stringToSVG(svgString: string): ChildNode | null {
  const svg = `<svg xmlns='${NAMESPACE}'>${svgString}</svg>`;
  const parsed = new DOMParser().parseFromString(svg, "text/xml");
  return parsed.documentElement.firstChild;
}
