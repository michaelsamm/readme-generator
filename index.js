// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// Title, Description, TOC, Installation, Usage, License (list show badge at top in addition to adding to license section), Contributing, Tests, Questions (github username + email)
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of the project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How should the project be installed?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should someone use this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the title of the project?',
        choices: ['Apache License 2.0', 'Boost Software License 1.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'MIT License', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What guidelines should be followed to contribute to the project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How should the project be tested?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub Username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter an email address for questions about the project'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer
        .prompt(questions)
};

// Function call to initialize app
init()
    .then(data => {
        return generateMarkdown(data);
    })
    .then(pageMarkdown => {
        return writeToFile(pageMarkdown);
    });
