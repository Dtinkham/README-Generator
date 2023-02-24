// TODO: Include packages needed for this application
//************************DONE****************************

const inquirer = require("inquirer");
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
//***************************DONE****************************

function init() {
    inquirer.prompt([
    {
    type: 'input',
    name: 'projectTitle' ,
    message: 'What is the name of your project?',
    },
    {
    type: 'input',
    name: 'description',
    message: 'Please describe your project:',
    },
    {
    type: 'input',
    name: 'installation',
    message: 'How do you install your application?',
    },
    {
    type: 'input',
    name: 'usage',
    message: 'What is this application used for?',
    },
    {
    type: 'input',
    name: 'gitHubUserName',
    message: 'What is your GitHub user name',
    },
    {
    type: 'input',
    name: 'emailAddress',
    message: 'What is your Email address?',
    },

    {
    type: 'input',
    name: 'contribution',
    message: 'Please describe the guidelines for contribution to this project:',
    },
    {
    type: 'input',
    name: 'testing',
    message: 'Please describe any tests for your application here:',
    },
    {
    type: 'list',
    name: 'license',
    message: 'What license is your project under?',
    choices: ["APACHE2.0","Boost1.0","BSD2","BSD3","GPL3.0","MIT","No License"]
    }
    ])
    

    .then((answers) => {
    console.log(answers)
    const md = generateMarkdown(answers);
    fs.writeFile('README.md', md,(err)  =>   
        err ? console.log(err) : console.log("Your README file was successfully generated!")
    );
    })
};

init();



// TODO: Create a function to initialize app
//************************DONE*************************



// Function call to initialize app


// GIVEN a command-line application that accepts user input

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the
// title of my project and sections entitled Description, 
//Table of Contents, Installation, Usage, License, Contributing, 
//Tests, and Questions





// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README 






// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
