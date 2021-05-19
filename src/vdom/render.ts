import type { Attributes, FileObject, ShapeChildren } from "../objects/types";
import { NAMESPACE, SVG_TYPE } from "../constants";

const setAttributes = (element: SVGElement, attr: Attributes = {}) => {
  for (let i = 0, keys = Object.keys(attr); i < keys.length; i++) {
    let key = keys[i];
    let value = attr[key];
    element.setAttributeNS(null, keys[i], value);
  }
  return element;
};

const createElement = (type: string): SVGElement => {
  const isSVG = type === SVG_TYPE;
  const element = document.createElementNS(NAMESPACE, type);
  if (isSVG) {
    element.setAttribute("xmlns", NAMESPACE);
    element.setAttribute("style", `height:100%;width:100%`);
  }
  return element;
};

const renderElement = ({ type, attr, children = [] }: ShapeChildren) => {
  const element = createElement(type);
  setAttributes(element, attr);

  if (children.length) {
    const fragment = new DocumentFragment();
    for (const child of children) {
      const childElement = renderElement(<ShapeChildren>child);
      fragment.appendChild(childElement);
    }
    element.appendChild(fragment);
  }

  return element;
};

export function render(app: ShapeChildren) {
  return renderElement(app);
}
