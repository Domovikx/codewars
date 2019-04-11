class Cuboid {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    get volume() {
        return this.length * this.width * this.height;
    }
    get surfaceArea() {
        return 2 * (this.length * this.width + this.width * this.height + this.height * this.length);
    }
}

class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length);
    }
}


// ************************************************

class Cuboid {
    constructor(length, width, height) {
        Object.assign(this, { length, width, height });
    }
    get volume() {
        return this.length * this.width * this.height;
    }
    get surfaceArea() {
        const { length: l, width: w, height: h } = this;
        return (2 * l * w) + (2 * l * h) + (2 * h * w);
    }
}
class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length);
    }
}