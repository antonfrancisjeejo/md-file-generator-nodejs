// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What's your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter the description: ",
  },
  {
    type: "editor",
    name: "instructions",
    message: "Enter the installation instructions:",
  },
  {
    type: "editor",
    name: "usage",
    message: "Enter the usage instructions:",
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter the contributions:",
  },
  {
    type: "editor",
    name: "tests",
    message: "Enter the tests:",
  },
  {
    type: "list",
    name: "license",
    message: "What type of license you prefer?",
    choices: ["ISC", "MIT"],
  },
  {
    type: "input",
    name: "username",
    message: "What's your github username?",
  },

  {
    type: "input",
    name: "email",
    message: "Enter your email to reach you:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const content = generateMarkdown(data);
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File Created");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, "  "));
    writeToFile("README.md", answers);
  });
}

// Function call to initialize app
init();
