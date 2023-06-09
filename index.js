// Packages
const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
const generateMarkdown = require("./utils/generateMarkdown.js");
const path = require("path");

// Questions
const promptUser = () => {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "title",
          message: "What is the title of your application?",
        },
        {
          type: "input",
          name: "description",
          message: "Please describe your application.",
        },
        {
          type: "input",
          name: "installation",
          message: "Please include all packages required to run this program.",
        },
        {
          type: "input",
          name: "usage",
          message: "Please describe the usage of your application.",
        },
        {
          type: "list",
          name: "license",
          message: "What license does your application use?",
          choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause", "ISC"],
        },
        {
          type: "input",
          name: "contributors",
          message: "Please list all contributors to this application.",
        },
        {
          type: "input",
          name: "tests",
          message: "What command is used to run a test?",
        },
        {
          type: "input",
          name: "username",
          message: "Enter your GitHub username.",
        },
        {
          type: "input",
          name: "email",
          message:
            "Please provide an email for users to contact you with questions.",
        },
      ])
      //Creates the ReadMe file and adds a success message if it works! (Placed in New-README folder)
      .then((answers) => {
        const readmePageContent = generateMarkdown(answers);
        const outputPath = path.join(__dirname, "New-README", "README.md");
        writeFile(outputPath, readmePageContent)
          .then(() => console.log("Successfully created README.md!"))
          .catch((err) => console.log(err));
      })
  );
};

module.exports = promptUser;
// Calls the promptUser function
promptUser();
