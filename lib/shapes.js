
class Shape {
    constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
}

    render() {
        throw new Error("Child must implement it's own render() method");
    }

    getTextColor() {
        if (this.textColor.startsWith('#')) {
            return this.textColor;
        }  else if (isNaN(this.textColor)) {
            return this.textColor;
        } else {
            return `#${this.textColor}`;
        }
    }
    getShapeColor() {
        if (this.shapeColor.startsWith('#')) {
            return this.shapeColor;
        }  else if (isNaN(this.shapeColor)) {
            return this.shapeColor;
        } else {
            return `#${this.shapeColor}`;
        }
    }

    renderSVG() {
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" >

        <${this.render()} fill="${this.getShapeColor()}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.getTextColor()}">${this.text}</text>
      
      </svg>`
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `polygon points="160 0, 250 200, 40 200"`
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `rect x="50" y="10" width="200" height="200"`
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return`circle cx="150" cy="110" r="80"`
    }
}

module.exports = { Triangle, Square, Circle }