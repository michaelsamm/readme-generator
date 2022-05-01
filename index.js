// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
        message: 'Please provide a description of the project. Consider the what, why, and how about this specific application.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps are needed to install the project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should someone use this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license protection applies to this project?',
        choices: [
            {
                name: 'None',
                value: {
                    name: 'None',
                    badge: '',
                    link: ''
                }
            }, 
            {
                name: 'Apache License 2.0',
                value: {
                    name: 'Apache License 2.0',
                    badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
                    link: 'https://opensource.org/licenses/Apache-2.0'
                }
            }, 
            {
                name: 'Boost Software License 1.0',
                value: {
                    name: 'Boost Software License 1.0',
                    badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
                    link: 'https://www.boost.org/LICENSE_1_0.txt'
                }
            }, 
            {
                name: 'GNU AGPLv3',
                value: {
                    name: 'GNU AGPLv3',
                    badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
                    link: 'https://www.gnu.org/licenses/agpl-3.0'
                },
            },
            {
                name: 'GNU GPLv3',
                value: {
                    name: 'GNU GPLv3',
                    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
                    link: 'https://www.gnu.org/licenses/gpl-3.0'
                }
            },
            {
                name: 'GNU LGPLv3',
                value: {
                    name: 'GNU LGPLv3',
                    badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
                    link: 'https://www.gnu.org/licenses/lgpl-3.0'
                }
            },
            {
                name: 'MIT License',
                value: {
                    name: 'MIT License',
                    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
                    link: 'https://opensource.org/licenses/MIT'
                }
            },
            {
                name: 'Mozilla Public License 2.0',
                value: {
                    name: 'Mozilla Public License 2.0',
                    badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
                    link: 'https://opensource.org/licenses/MPL-2.0'
                }
            },
            {
                name: 'The Unlicense',
                value: {
                    name: 'The Unlicense',
                    badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://unlicense.org/)',
                    link: 'https://unlicense.org/'
                }
            }]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What collaborators or third-party assets were part of this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Are there any tests for this project? How should they be run?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub Username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter an email address for questions about the project: '
    },
];

// TODO: Create a function to write README file
function writeToFile(pageMarkdown) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', pageMarkdown, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

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
