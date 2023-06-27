const inquirer = require('inquirer');
const fs = require('fs');

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
        shapeElement = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
    } else if (shape === 'Triangle') {
        shapeElement = `<polygon points="150,20 280,180 20,180" fill="${shapeColor}" />`;
    } else if (shape === 'Square') {
        shapeElement = `<rect x="75" y="50" width="150" height="100" fill="${shapeColor}" />`;
    }

    const svgTemplate = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shapeElement}
      <text x="50%" y="50%" text-anchor="middle" alignment-baseline="central" fill="${textColor}" font-size="80">${text}</text>
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
