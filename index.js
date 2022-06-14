// bringing inquirer into vscode. 
const inquirer = require("inquirer");
const utils = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
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
        message: "What's the installation process?"
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
        choices: ["License 1", "License 2", "License 3"]
    },
    {
        name: "contributing",
        type: "input",
        message: "List your contributors:"
    },
    {
        name: "questions",
        type: "input",
        message: "Do you have any questions?"
    },
    {
        name: "test",
        type: "confirm",
        message: "Do you want to test your project?"
    }

];


inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    utils.generateMarkdown(answers);
})