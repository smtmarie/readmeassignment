const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
const path = require("path");

const questions = [

    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },

    {
        type: "input",
        name: "location",
        message: "Where are you from?",
    },

    {
        type: "input",
        name: "profession",
        message: "What is your profession?",

    },

    {
        type: "input",
        name: "hobby",
        message: "What is your favorite hobby?",

    },

    {
        type: "input",
        name: "github",
        message: "Enter your Github username",

    },

    {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL",

    },


]

function writeToFile(fileName, data) {

    return fs.writeFileSync(path.join(process.cwd(), fileName), data)

}

function init() {

    inquirer.prompt(questions).then(inquireResponses => {

        writeToFile("readme2.md", generateMarkdown({ ...inquireResponses }))
    })
}


init();













