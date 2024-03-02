class GenerateSVG {
    constructor(text, textColor, shape, backgroundColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.backgroundColor = backgroundColor;
    }

    render() {
        let shapeText = '';
        let txtColor = '';
        let bkgdColor = '';

        if (this.shape === 'circle') {
            shapeText = `circle cx="150" cy="110" r="80"`;
        } else if (this.shape === 'square') {
            shapeText = `rect x="50" y="10" width="200" height="200"`;
        } else {
            shapeText = `polygon points="160 0, 250 200, 40 200"`
        }

        if (this.textColor.startsWith('#')) {
            txtColor = this.textColor;
        }  else if (isNaN(this.textColor)) {
            txtColor = this.textColor;
        } else {
            txtColor = `#${this.textColor}`;
        }
        
        if (this.backgroundColor.startsWith('#')) {
            bkgdColor = this.backgroundColor;
        }  else if (isNaN(this.backgroundColor)) {
            bkgdColor = this.backgroundColor;
        } else {
            bkgdColor = `#${this.backgroundColor}`;
        }


        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" >

        <${shapeText} fill="${bkgdColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${txtColor}">${this.text}</text>
      
      </svg>`
    }
}



module.exports = GenerateSVG;