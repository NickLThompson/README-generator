// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const licenses = ["License 1", "License 2", "License 3"]
const questions = [
    {
        name: "title",
        type: "input",
        message: "What will be the title?"
    },
    {
        name: "description",
        type: "input",
        message: "Write a good description of your project! Press enter when you're done:"
    },
    // Table of Contents
    // 1. [Description](#description)
    // 2. [Installation](#installation)
    // 3. [Usage](#usage)
    // 4. [License](#license)
    // 5. [Contributors](#contributors)
    // 6. [Test](#test)
    // 7. [Questions](#questions)
    {
        name: "installation",
        type: "input",
        message: "What's the installation process. Separate each step by a comma, please:"
    },
    {
        name: "usage",
        type: "input",
        message: "What's your project's usage?"
    },
    {
        name: "license",
        type: "list",
        message: "Choose the license being used:",
        choices: licenses,
    },
    {
        name: "contributing",
        type: "input",
        message: "List your contributors. Separate by comma again:"
    },
    {
        name: "test",
        type: "confirm",
        message: "Do you want to test your project?"
    },
    {
        name: "questions",
        type: "input",
        message: "Do you have any questions? If so, separate by comma once more:"
    }

];

// inquirer
//     .prompt([
//         {
//             name: "user_name",
//             type: "input",
//             message: "What is your name?",
//         },
//     ])
//     .then((answer) => {
//         console.log("Hello " + answer.user_name);
//     });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => generateMarkdown(answers))
    .catch(err => console.error(err))
}

// // Function call to initialize app
init();


