
const { Triangle, Square, Circle } = require('../lib/shapes');

describe ('Triangle', () => {
    it('will show up as a "polygon" with the user-specified color background', () => {
        const shape = new Triangle('text');
        shape.textColor = "blue";
        shape.shapeColor = "yellow";
        expect(shape.renderSVG()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" >

        <polygon points="160 0, 250 200, 40 200" fill="yellow" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">text</text>
      
      </svg>`);
    })
})

describe ('Square', () => {
    it('will show up as a "rect" with the user-specified color background', () => {
        const shape = new Square('text');
        shape.textColor = "#980521";
        shape.shapeColor = "#850421";
        expect(shape.renderSVG()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" >

        <rect x="50" y="10" width="200" height="200" fill="#850421" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="#980521">text</text>
      
      </svg>`);
    })
})

describe ('Circle', () => {
    it('will show up as a "circle" with the user-specified color background', () => {
        const shape = new Circle('text');
        shape.textColor = "134983";
        shape.shapeColor = "432542";
        expect(shape.renderSVG()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" >

        <circle cx="150" cy="110" r="80" fill="#432542" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="#134983">text</text>
      
      </svg>`);
    })
})
