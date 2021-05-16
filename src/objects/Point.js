export class Point {
    constructor(x, y) {
        this._attributes = {
            x: x,
            y: y
        }
    }

    set x(x) {
        this._attributes.x = x;
    }
    set y(y) {
        this._attributes.y = y;
    }
    get x() {
        return this._attributes.x
    }
    get y() {
        return this._attributes.y
    }
}

