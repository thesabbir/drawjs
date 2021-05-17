import createElement from "./createElement";
import createSVG from "./createSVG";
import type { Attributes, ShapeObject } from "../objects/Shape";
import type { LayerObject } from "../core/Layer";
import type { DrawFileObject } from "../core/DrawFile";

export const setAttributes = (
  element: SVGElement,
  attributes: Attributes<any>
) => {
  for (let i = 0, keys = Object.keys(attributes); i < keys.length; i++) {
    let value = attributes[keys[i]];
    element.setAttributeNS(null, keys[i], value);
  }
  return element;
};

export const objectToNode = (children: ShapeObject[]) => {
  const childNodes = new DocumentFragment();
  for (let i = 0; i < children.length; i++) {
    const node = children[i];
    childNodes.appendChild(
      setAttributes(createElement(node.type), node.attributes)
    );
  }
  return childNodes;
};

export const objectToGroup = (layer: LayerObject) =>
  setAttributes(createElement(layer.type), layer.attributes);

export const layerToSVG = (layers: LayerObject[]) => {
  const layerNodes = new DocumentFragment();
  for (let i = 0; i < layers.length; i++) {
    const layer = layers[i];
    const group = objectToGroup(layer);
    group.appendChild(objectToNode(layer.children));
    layerNodes.appendChild(group);
  }
  return layerNodes;
};

export const documentToSVG = ({ id, layers }: DrawFileObject): SVGElement => {
  const svg = createSVG({ id });
  svg.appendChild(layerToSVG(layers));
  return svg;
};

export const toSVGView = (file: DrawFileObject) => {
  return documentToSVG(file);
};
