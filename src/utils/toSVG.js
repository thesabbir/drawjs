import {NAMESPACE} from "../constants";


export const createElement = (type) => {
    return document.createElementNS(null, type);
};

export const setAttributes = (element, attributes) => {
    Object.keys(attributes).map((key) => {
        let value = attributes[key];
        element.setAttributeNS(null, key, value);
    });
    return element
}


export const nodesToSVG = children => {
    return children
        .map(node => setAttributes(createElement(node.type), {...node.attributes, id: node.uuid}).outerHTML)
        .join("")
}

export const layerToGroup = layers => {
    return layers.map((layer) => {
        const children = nodesToSVG(layer.children)
        const g = setAttributes(createElement('g'), {id: layer.uuid})
        g.innerHTML = children
        return g.outerHTML
    }).join("")
}

export const objectToSVG = viewObject => {
    const svg = document.createElementNS(NAMESPACE, "svg");
    svg.setAttributeNS(NAMESPACE, "ns:xmlns", NAMESPACE);
    svg.setAttribute("style", `height:100%;width:100%`);
    svg.innerHTML = layerToGroup(viewObject);
    return svg.outerHTML
}

export const toSVGView = (viewObject) => {
    return objectToSVG(viewObject)
}
