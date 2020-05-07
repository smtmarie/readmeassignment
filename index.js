var inquirer = require("inquirer");
var fs = require("fs");
var util = require("util");
var path = require("path");
var generateMarkdown = require("./generateMarkdown");

// const createReadAsync = util.promisify(fs.writeFile)

const questions = [
        {
            type: "input",
            message: "What is your github username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },

        {
            type: "input",
            message: "What is the tile of your project?",
            name: "projectName"

        },
        {
            type: "input",
            message: "What is a good description of your project?",
            name: "description"

        },
        {
            type: "input",
            message: "What command would you need to install?",
            name: "install"

        },
        {
            type: "input",
            message: "Who has contributed to this project?",
            name: "contribute"

        },
        {
            type: "input",
            message: "How would you run a test?",
            name: "testing"

        },
        {
            type: "checkbox",
            message: "What license is this project under?",
            name: "license",
            choices: ["MIT", "GNU", "BSD", "Apache"]

        }
    ]

function writeToFile(fileName, data) {
    return fs.writerFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        writeToFile("README.md", generateMarkdown({ ...inquirerResponses}));
    })
}

init();














































// const inquirer = require("inquirer");
// const fs = require("fs");
// const util = require("util");
// const api = require("./utilities/api");
// const generateMarkdown = require("./generateMarkdown");

// const writeFileAsync = util.promisify(fs.writeFile);

// const questions = [

//     {
//         type: "input",
//         name: "username",
//         message: "What is your Github username?",
//     },

//     {
//         type: "input",
//         name: "title",
//         message: "What is the title of your project?",
//     },

//     {
//         type: "input",
//         name: "description",
//         message: "Please give a brief description of your project.",

//     },

//     {
//         type: "list",
//         name: "license",
//         message: "What license would you like to utilize?",
//         choices: ["MIT", "BSD", "Apache", "GPL", "None"]

//     },

//     {
//         type: "input",
//         name: "install",
//         message: "What command will you need to install dependencies?",
//         default: "npm i"

//     },

//     {

//         type: "input",
//         name: "usage",
//         message: "What does user need to know to utilize the application?",

//     },

//     {

//         type: "input",
//         name: "contributing",
//         message: "What does user need to know to contribute to the repo?",
//     },

//     {

//         type: "input",
//         name: "tests",
//         message: "What command should be utilized to run tests?",
//         default: "npm test"
//     },


// ];



// function init() {

//     inquirer.prompt(questions).then(answers => {

//         console.log(answers)
//         api.getUser(answers.username)
//             .then(({ data }) => {

//                 writeFileAsync("README.md", generateMarkdown({ ...answers, ...data }))

//             })
//     });
// };


// init();













