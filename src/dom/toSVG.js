import createElement from "./createElement";
import createSVG from "./createSVG";

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
    childNodes.appendChild(
      setAttributes(createElement(node.type), node.attributes)
    );
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
