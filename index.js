const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const api = require("./utilities/api");
const generateMarkdown = require("./utilities/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile)

function questions() {

    return inquirer.prompt([

        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?",
        },
    
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },

        {
            type: "input",
            name: "contribution",
            message: "Who has contributed to this project?",
    
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
            choices: ["MIT", "BSD", "Apache", "GNU", "None"]
    
        },
        
        {
            type: "input",
            name: "install",
            message: "What command will you need to install?",
    
        },
    
        {
            type: "input",
            name: "testing",
            message: "How would you like to run a test?",
    
        },

       

    ])

   
}


function writeToFile(fileName, data) {

    return fs.writeFileSync(path.join(process.cwd(), fileName), data)

}

function init() {

    inquirer.prompt(questions).then(inquireResponses => {

        writeToFile("readme2.md", generateMarkdown({ ...inquireResponses }))
    })
};

function init() {

    inquirer.prompt(questions).then(answers=> {

        console.log(answers)
        api.getUser(answers.username)
        .then(({data}) => {

            writeFileAsync("README.md", generateMarkdown({...answers, ...data}))

        })
    })
}


init();













