
// @thesabbir/drawjs 0.0.2
// MIT
// https://github.com/thesabbir/drawjs

// src/constants.js
var RECT_TYPE = `rect`;
var LAYER_TYPE = `g`;
var NAMESPACE = `http://www.w3.org/2000/svg`;

// src/helpers.js
var genUUID = () => {
  return ([1e4] + -1e4 + -1e4).replace(/[018]/g, (str) => (str ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> str / 4).toString(16));
};
var mapToArray = (object) => {
  const items = [];
  for (let i = 0, keys = Object.keys(object); i < keys.length; i++) {
    items.push(object[keys[i]]);
  }
  return items;
};
var eachToObject = (items) => {
  return items.map((item) => item.toObject());
};

// src/core/Layer.js
var Layer = class {
  constructor(name = "new layer") {
    this._name = name;
    this._type = LAYER_TYPE;
    this._uuid = genUUID();
    this._children = {};
    this._activeChildren = null;
    this._active = false;
    this._attributes = {};
  }
  set name(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set active(active) {
    this._active = active;
  }
  get active() {
    return this._active;
  }
  get attributes() {
    return this._attributes;
  }
  set attributes(attributes) {
    this._attributes = {
      ...this._attributes,
      ...attributes
    };
  }
  get uuid() {
    return this._uuid;
  }
  addChildren(children) {
    this._children[children.uuid] = children;
    this.activeChildren = children;
  }
  set activeChildren(children) {
    this._activeChildren = children.uuid;
  }
  get activeChildren() {
    return this._children[this._activeChildren];
  }
  get children() {
    return mapToArray(this._children);
  }
  toObject() {
    return {
      type: this._type,
      uuid: this._uuid,
      name: this._name,
      children: eachToObject(this.children)
    };
  }
};

// src/dom/createElement.js
function createElement(type) {
  return document.createElementNS(NAMESPACE, type);
}

// src/dom/createSVG.js
function createSVG(attributes = {}) {
  const svg = document.createElementNS(NAMESPACE, "svg");
  svg.setAttribute("xmlns", NAMESPACE);
  setAttributes(svg, attributes);
  return svg;
}

// src/dom/toSVG.js
var setAttributes = (element, attributes) => {
  for (let i = 0, keys = Object.keys(attributes); i < keys.length; i++) {
    let value = attributes[keys[i]];
    element.setAttributeNS(null, keys[i], value);
  }
  return element;
};
var objectToNode = (children) => {
  const childNodes = new DocumentFragment();
  for (let i = 0; i < children.length; i++) {
    const node = children[i];
    childNodes.appendChild(setAttributes(createElement(node.type), {
      ...node.attributes,
      id: node.uuid
    }));
  }
  return childNodes;
};
var objectToGroup = (layer) => setAttributes(createElement(layer.type), {
  ...layer.attributes,
  id: layer.uuid
});
var layerToSVG = (layers) => {
  const layerNodes = new DocumentFragment();
  for (let i = 0; i < layers.length; i++) {
    const layer = layers[i];
    const group = objectToGroup(layer);
    group.appendChild(objectToNode(layer.children));
    layerNodes.appendChild(group);
  }
  return layerNodes;
};
var documentToSVG = (viewObject) => {
  const svg = createSVG({id: viewObject.uuid});
  svg.appendChild(layerToSVG(viewObject.layers));
  return svg;
};
var toSVGView = (viewObject) => {
  return documentToSVG(viewObject);
};

// src/core/DrawFile.js
var DrawFile = class {
  constructor(name = "Untitled.svg") {
    this._name = name;
    this._state = {};
    this._layers = {};
    this._activeLayer = null;
    this._uuid = genUUID();
    this.setup();
  }
  get state() {
    return this._state;
  }
  set state(data) {
    this._state = data;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get uuid() {
    return this._uuid;
  }
  get layers() {
    return mapToArray(this._layers);
  }
  get activeLayer() {
    return this._layers[this._activeLayer];
  }
  set activeLayer(layer) {
    this._activeLayer = layer.uuid;
  }
  addLayer(layer = new Layer()) {
    this._layers[layer.uuid] = layer;
    this.activeLayer = layer;
  }
  draw(shape, requestRender) {
    this.activeLayer.addChildren(shape);
    shape.onViewUpdate(() => {
      requestRender(this.toSVG());
    });
  }
  toObject() {
    return {
      name: this.name,
      uuid: this.uuid,
      layers: eachToObject(this.layers)
    };
  }
  toSVG() {
    const svg = toSVGView(this.toObject());
    svg.setAttribute("style", `height:100%;width:100%`);
    return svg;
  }
  setup() {
    this.addLayer(new Layer("layer 1"));
  }
};

// src/core/Draw.js
var Draw = class {
  constructor(rootElm) {
    this._rootElm = rootElm;
    this._files = {};
    this._activeFile = {};
  }
  get files() {
    return mapToArray(this._files);
  }
  newFile(name) {
    const file = new DrawFile(name);
    this._files[file.uuid] = file;
    this._activeFile = file.uuid;
    return file;
  }
  get activeFile() {
    return this._files[this._activeFile];
  }
  set activeFile(file) {
    return this._files[file.uuid];
  }
  draw(shape) {
    this.activeFile.draw(shape, this._renderDom.bind(this));
    this._renderDom();
  }
  _renderDom(content = this.activeFile.toSVG()) {
    if (!this._rootElm) {
      return new Error("Root element not found");
    }
    this._rootElm.replaceChildren(content);
  }
  setup() {
    this.newFile();
    this._renderDom();
  }
};

// src/objects/Point.js
var Point = class {
  constructor(x, y) {
    this._attributes = {
      x,
      y
    };
  }
  set x(x) {
    this._attributes.x = x;
  }
  set y(y) {
    this._attributes.y = y;
  }
  get x() {
    return this._attributes.x;
  }
  get y() {
    return this._attributes.y;
  }
};

// src/objects/Shape.js
var Shape = class extends Point {
  constructor(x = 0, y = 0) {
    super(x, y);
    this._uuid = genUUID();
    this._attributes = this.attributes || {};
    return new Proxy(this, {
      set: (target, key, value) => {
        target[key] = value;
        if (target._updateView)
          target._updateView(target);
        return true;
      }
    });
  }
  get attributes() {
    return this._attributes;
  }
  set attributes(attributesObject) {
    this._attributes = {
      ...this._attributes,
      ...attributesObject
    };
  }
  set fill(color) {
    this._attributes.fill = color;
  }
  set stroke(color) {
    this._attributes.stroke = color;
  }
  set strokeWidth(width) {
    this._attributes.strokeWidth = width;
  }
  set transform(properties) {
    this._attributes.transform = properties;
  }
  get uuid() {
    return this._uuid;
  }
  onViewUpdate(f) {
    this._updateView = f;
  }
};

// src/objects/Rectangle.js
var Rectangle = class extends Shape {
  constructor(x, y, height, width) {
    super(x, y);
    this._type = RECT_TYPE;
    this._attributes = this._attributes || {};
    this._attributes.height = height;
    this._attributes.width = width;
  }
  set height(height) {
    this._attributes.height = height;
  }
  set width(width) {
    this._attributes.width = width;
  }
  get height() {
    return this._attributes.height;
  }
  get width() {
    return this._attributes.width;
  }
  toObject() {
    return {
      type: this._type,
      uuid: this.uuid,
      attributes: this.attributes
    };
  }
  clone() {
    return new Rectangle(this._attributes.x, this._attributes.y, this._attributes.height, this._attributes.width);
  }
};
export {
  Draw,
  Rectangle
};
