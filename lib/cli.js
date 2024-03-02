const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { Triangle, Square, Circle } = require('../lib/shapes');

class CLI {
  constructor() {
    this.options = [];
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          message: "What text would you like in your logo? You may choose up to 3 (three) characters.",
          name: 'text',
          validate: function(response) {
              if (response.length > 3 || response.length < 1) {
                  return console.log('Please enter a valid response - do limit your response to three characters.');
              } 
              return true;
          }
        },
        {
          type: 'input',
          message: "Next, what color would you like that text to be? Colors or hexidecimal color reference numbers are valid input.",
          name: 'textColor',
          validate: function(response) {
              if (response.length < 1) {
                  return console.log('Please enter a color without spaces (or a hexidecimal color reference).');
              } 
              return true;
          }
      },
        {   type: 'list',
            message: "Which of these three shapes would you like your logo to be?",
            choices: ['circle', 'triangle', 'square'],        
            name: 'shape'
        },
        {
          type: 'input',
          message: "Next, what color would you like the shape to be? Colors or hexidecimal color reference numbers are valid input. (Do not choose white.)",
          name: 'shapeColor',
          validate: function(response) {
              if (response.length < 1) {
                  return console.log('Please enter a color without spaces (or a hexidecimal color reference).');
              } 
              return true;
          }
      }
      ])
      .then((res) => {
        this.options = res;
        let logoObj;
        const { text, textColor, shape, shapeColor } = res;
        if (shape === 'circle') {
          logoObj = new Circle(text, textColor, shapeColor);
        } else if (shape === 'square') {
          logoObj = new Square(text, textColor, shapeColor);
        } else {
          logoObj = new Triangle(text, textColor, shapeColor);
        }
        const logo = logoObj.renderSVG();
        return logo;
      })
      .then((logo) => {
        return writeFile(
          join(__dirname, '..', 'output', 'logo.svg'),
          logo
        );
      })
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }

}

module.exports = CLI;
