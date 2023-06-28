const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

// Prompts for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
            validate: (input) => {
                return input.length <= 3 || 'Please enter up to three characters.';
            },
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (color name or hexcode):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (color name or hexcode):',
        },
    ]);
};

// Generate the SVG logo based on user input
const generateLogo = (data) => {
    const { text, textColor, shape, shapeColor } = data;

    let shapeElement = '';

    if (shape === 'Circle') {
        const circle = new Circle(shapeColor);
        shapeElement = circle.getSvgElement();
    } else if (shape === 'Triangle') {
        const triangle = new Triangle(shapeColor);
        shapeElement = triangle.getSvgElement();
    } else if (shape === 'Square') {
        const square = new Square(shapeColor);
        shapeElement = square.getSvgElement();
    }

    const svgTemplate = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeElement}
        <text x="50%" y="50%" text-anchor="middle" fill="${textColor}" font-size="40">${text}</text>
    </svg>`;

    return svgTemplate;
};


// Write the SVG logo to a file
const saveLogoToFile = (logo) => {
    fs.writeFile('logo.svg', logo, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg');
    });
};

// Entry point of the application
const runApp = async () => {
    try {
        const userInput = await promptUser();
        const logo = generateLogo(userInput);
        saveLogoToFile(logo);
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

// Run the application
runApp();
