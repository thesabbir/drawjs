import createElement from "./createElement";
import createSVG from "./createSVG";
import { CIRCLE_TYPE } from "../constants";

export const transformNodeAttribute = (node) => {
  switch (node.type) {
    case CIRCLE_TYPE:
      const { x, y } = node.attributes;
      return {
        id: node.uuid,
        cx: x,
        cy: y,
        ...node.attributes,
      };
    default:
      return {
        id: node.uuid,
        ...node.attributes,
      };
  }
};

export const setAttributes = (element, attributes) => {
  for (let i = 0, keys = Object.keys(attributes); i < keys.length; i++) {
    let value = attributes[keys[i]];
    element.setAttributeNS(null, keys[i], value);
  }
  return element;
};

export const objectToNode = (children) => {
  const childNodes = new DocumentFragment();
  for (let i = 0; i < children.length; i++) {
    const node = children[i];
    const attributes = transformNodeAttribute(node);
    childNodes.appendChild(setAttributes(createElement(node.type), attributes));
  }
  return childNodes;
};

export const objectToGroup = (layer) =>
  setAttributes(createElement(layer.type), {
    ...layer.attributes,
    id: layer.uuid,
  });

export const layerToSVG = (layers) => {
  const layerNodes = new DocumentFragment();
  for (let i = 0; i < layers.length; i++) {
    const layer = layers[i];
    const group = objectToGroup(layer);
    group.appendChild(objectToNode(layer.children));
    layerNodes.appendChild(group);
  }
  return layerNodes;
};

export const documentToSVG = (viewObject) => {
  const svg = createSVG({ id: viewObject.uuid });
  svg.appendChild(layerToSVG(viewObject.layers));
  return svg;
};

export const toSVGView = (viewObject) => {
  return documentToSVG(viewObject);
};
