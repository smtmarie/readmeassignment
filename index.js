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
        name: "hobby",
        message: "What is your favorite hobby?",

    },

    {
        type: "input",
        name: "food",
        message: "What is your favorite food?",

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

async function init() {

    console.log("Hey there!")

    try {

        const answers = await promptUser();

        const html = generateHTML(answers);

        await writeFileAsync("index.html", html);

        console.log("Successfully written to index.html");

    } catch (err) {

        console.log("Error");
    }
}






// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
