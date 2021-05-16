import {LAYER_TYPE} from "../constants";

export class Layer {
    constructor(name = '') {
        this._name = ''
        this._type = LAYER_TYPE
        this._uuid = Math.random() * 100000
        this._children = []
        this._active = false
    }

    set name(name) {
        this._name = name
    }
    get name() {
        return this._name
    }
    set active(active) {
        this._active = active
    }

    get active() {
        return this._active
    }

    get uuid() {
        return this._uuid
    }

    addChildren(children) {
        this._children.push(children)
    }

    get children() {
        return this._children
    }

    childrenToObject() {
        return this._children.map(item => item.toObject())
    }

    toObject() {
        return {
            type: this._type,
            uuid: this._uuid,
            name: this._name,
            children: this.childrenToObject()
        }
    }
}
