import {Point} from "./Point";

export class Shape extends Point {
    constructor(x = 0, y = 0) {
        super(x, y);
        this._uuid = Math.random() * 10000000;
        this._attributes = this.attributes || {}
        return new Proxy(this, {
            set: (target, key, value) => {
                target[key] = value
                if(target._updateView) target._updateView(target)
                return true
            }
        })
    }

    get attributes() {
        return this._attributes
    }

    set attributes(attributesObject) {
        this._attributes = {
            ...this._attributes,
            ...attributesObject
        }

    }

    set fill(color) {
        this._attributes.fill = color

    }

    set stroke(color) {
        this._attributes.stroke = color

    }

    set strokeWidth(width) {
        this._attributes.strokeWidth = width

    }

    set transform(properties) {
        this._attributes.transform = properties
    }

    get uuid() {
        return this._uuid
    }


    onViewUpdate(f) {
        this._updateView = f
    }
}


