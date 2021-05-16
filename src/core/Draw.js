import {Layer} from "./Layer";
import {toSVGView} from "../utils/toSVG";

export class Draw {
    constructor(rootElm) {
        this._state = {}
        this._layers = {}
        this._activeLayer = null
        this._rootElm = rootElm
    }

    get state() {
        return this._state;
    }

    set state(data) {
        this._state = data
    }

    get layers() {
        return Object.keys(this._layers).map(k => this._layers[k])
    }

    get activeLayer() {
        return this._layers[this._activeLayer]
    }

    set activeLayer(layer) {
        this._activeLayer = layer.uuid
    }

    addLayer(layer = new Layer()) {
        this._layers[layer.uuid] = layer;
        this._activeLayer = layer.uuid
    }

    draw(shape) {
        shape.onViewUpdate((shape) => {
            this.updateView();
        })

        this.activeLayer.addChildren(shape)
        this.updateView()
    }

    updateView() {
        this.makeView()
        if (this._rootElm) {
            this.renderDom()
        } else {
            new Error("Root element not found")
        }
    }

    makeView() {
        this._viewObject = this.layers.map(i => i.toObject())
    }

    renderDom() {
        this._svg = toSVGView(this._viewObject)
        this._rootElm.innerHTML = this._svg
    }

    setup() {
        this.addLayer(new Layer('layer 1'))
    }
}
