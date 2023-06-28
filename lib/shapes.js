class Circle {
    constructor(color) {
        this.color = color;
    }

    getSvgElement() {
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
}

class Square {
    constructor(color) {
        this.color = color;
    }

    getSvgElement() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.color}" />`;
    }
}

class Triangle {
    constructor(color) {
        this.color = color;
    }

    getSvgElement() {
        return `<polygon points="150,20 280,180 20,180" fill="${this.color}" />`;
    }
}

module.exports = {
    Circle,
    Square,
    Triangle,
};
