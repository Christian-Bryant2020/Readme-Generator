// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of this file?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are there installation instructions?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Besides you, who contributed to this project?',
        name: 'contributers',
    },
    {
        type: 'input',
        message: 'What is your gitHub username?',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'Choose a license for this project: ',
        name: 'license',
        choices: ['Apache', 'IBM', 'Mozilla', 'Eclipse'],
      },
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        generateMarkdown.renderLicenseBadge(response);
        generateMarkdown.renderLicenseLink(response);
        generateMarkdown.renderLicenseSection(response);
         return response;
    })

    // inputs the data from the license and user prompt and returns a filled out and formatted readme
    .then((data) => {
        generateMarkdown.generateMarkdown(data, licenseBadge, licenseSection)
        return template
    })
    
    // writes the readme data to a readme file named generatedReadme.md
    .then((toGenerate) => {
        fs.writeFile('generatedReadme.md', toGenerate, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    })
}


// Function call to initialize app
init();
