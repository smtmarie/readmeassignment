const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const api = require("./utilities/api");
const generateMarkdown = require("./generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [

    {
        type: "input",
        name: "username",
        message: "What is your Github username?",
    },

    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },

    {
        type: "input",
        name: "description",
        message: "Please give a brief description of your project.",

    },

    {
        type: "list",
        name: "license",
        message: "What license would you like to utilize?",
        choices: ["MIT", "BSD", "Apache", "GPL", "None"]

    },

    {
        type: "input",
        name: "install",
        message: "What command will you need to install dependencies?",
        default: "npm i"

    },

    {

        type: "input",
        name: "usage",
        message: "What does user need to know to utilize the application?",

    },

    {

        type: "input",
        name: "contributing",
        message: "What does user need to know to contribute to the repo?",
    },

    {

        type: "input",
        name: "tests",
        message: "What command should be utilized to run tests?",
        default: "npm test"
    },

    
];



function init() {

    inquirer.prompt(questions).then(answers => {

        console.log(answers)
        api.getUser(answers.username)
            .then(({ data }) => {

                writeFileAsync("README.md", generateMarkdown({ ...answers, ...data }))

            })
    });
};


init();













