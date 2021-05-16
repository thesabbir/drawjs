
// Grafix 0.0.1
// MIT
// https://github.com/thesabbir/drawjs

// src/constants.js
var RECT_TYPE = `rect`;
var LAYER_TYPE = `layer`;
var NAMESPACE = `http://www.w3.org/2000/svg`;

// src/core/Layer.js
var Layer = class {
  constructor(name = "") {
    this._name = "";
    this._type = LAYER_TYPE;
    this._uuid = Math.random() * 1e5;
    this._children = [];
    this._active = false;
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
  get uuid() {
    return this._uuid;
  }
  addChildren(children) {
    this._children.push(children);
  }
  get children() {
    return this._children;
  }
  childrenToObject() {
    return this._children.map((item) => item.toObject());
  }
  toObject() {
    return {
      type: this._type,
      uuid: this._uuid,
      name: this._name,
      children: this.childrenToObject()
    };
  }
};

// src/utils/toSVG.js
var createElement = (type) => {
  return document.createElementNS(null, type);
};
var setAttributes = (element, attributes) => {
  Object.keys(attributes).map((key) => {
    let value = attributes[key];
    element.setAttributeNS(null, key, value);
  });
  return element;
};
var nodesToSVG = (children) => {
  return children.map((node) => setAttributes(createElement(node.type), {...node.attributes, id: node.uuid}).outerHTML).join("");
};
var layerToGroup = (layers) => {
  return layers.map((layer) => {
    const children = nodesToSVG(layer.children);
    const g = setAttributes(createElement("g"), {id: layer.uuid});
    g.innerHTML = children;
    return g.outerHTML;
  }).join("");
};
var objectToSVG = (viewObject) => {
  const svg = document.createElementNS(NAMESPACE, "svg");
  svg.setAttributeNS(NAMESPACE, "ns:xmlns", NAMESPACE);
  svg.setAttribute("style", `height:100%;width:100%`);
  svg.innerHTML = layerToGroup(viewObject);
  return svg.outerHTML;
};
var toSVGView = (viewObject) => {
  return objectToSVG(viewObject);
};

// src/core/Draw.js
var Draw = class {
  constructor(rootElm) {
    this._state = {};
    this._layers = {};
    this._activeLayer = null;
    this._rootElm = rootElm;
  }
  get state() {
    return this._state;
  }
  set state(data) {
    this._state = data;
  }
  get layers() {
    return Object.keys(this._layers).map((k) => this._layers[k]);
  }
  get activeLayer() {
    return this._layers[this._activeLayer];
  }
  set activeLayer(layer) {
    this._activeLayer = layer.uuid;
  }
  addLayer(layer = new Layer()) {
    this._layers[layer.uuid] = layer;
    this._activeLayer = layer.uuid;
  }
  draw(shape) {
    shape.onViewUpdate((shape2) => {
      this.updateView();
    });
    this.activeLayer.addChildren(shape);
    this.updateView();
  }
  updateView() {
    this.makeView();
    if (this._rootElm) {
      this.renderDom();
    } else {
      new Error("Root element not found");
    }
  }
  makeView() {
    this._viewObject = this.layers.map((i) => i.toObject());
  }
  renderDom() {
    this._svg = toSVGView(this._viewObject);
    this._rootElm.innerHTML = this._svg;
  }
  setup() {
    this.addLayer(new Layer("layer 1"));
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
    this._uuid = Math.random() * 1e7;
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
    this._attributes._height = height;
  }
  set width(width) {
    this._attributes._width = width;
  }
  get height() {
    return this._attributes._height;
  }
  get width() {
    return this._attributes._width;
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
