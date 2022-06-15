// bringing inquirer into vscode and linking the generateMarkdown document here
const inquirer = require("inquirer");
const utils = require("./utils/generateMarkdown.js")

// array of questions being asked in the console
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
        choices: [
            "MIT",
            "GPL",
            "Apache",
            "Apache 2",
            "BSD",
        ]
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
        type: "input",
        message: "How do you test your code?"
    },
    {
        name: "gitHub",
        type: "input",
        message: "What is your GitHub username?"
    },
    {
        name: "email",
        type: "input",
        message: "What is your email address?"
    },

];


inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    utils.generateMarkdown(answers);
})