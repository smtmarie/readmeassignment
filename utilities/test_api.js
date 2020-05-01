// const inquirer = require("inquirer");

// const axios = require("axios");

// inquirer.prompt({

//     message: "What is your Github username?",
//     name: "username",
// })

// .then(function({ username}) {

//     const queryUrl= `https://api.github.com/users/${username}?client_id=${

//     process.env.CLIENT_ID

//    }&client_secret=${process.env.CLIENT_SECRET}`;

//    axios.get(queryUrl)
//    .then(function(res) {

//     console.log(res.data)
//    })
// });