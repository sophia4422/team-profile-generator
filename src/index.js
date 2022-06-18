const inquirer = require("inquirer");

const fs = require("fs");

const teamName = [
  {
    name: "teamName",
    type: "input",
    message: "What is the name of your team?",
  },
];

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "Please enter the Manager's name:",
  },
  {
    type: "input",
    name: "managerId",
    message: "Please enter the Manager's ID number:",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Please enter the Manager's Email address:",
  },
  {
    type: "input",
    name: "managerNumber",
    message: "Please enter the Manager's Office Number:",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "Please enter Engineer's name:",
  },
  {
    type: "input",
    name: "engineerId",
    message: "Please enter Engineer's ID number:",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "Please enter the Engineer's Email address:",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter the Engineer's Github username:",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "Please enter Intern's name:",
  },
  {
    type: "input",
    name: "internId",
    message: "Please enter Intern's ID number:",
  },
  {
    type: "input",
    name: "internEmail",
    message: "Please enter the Intern's Email address:",
  },
  {
    type: "input",
    name: "internSchool",
    message: "Please enter the Intern's school:",
  },
];

const allEmployees = () => {};

const init = async () => {
  const teamNameAnswer = await inquirer.prompt(teamName);
  const internAnswers = await inquirer.prompt(internQuestions);
  const engineerAnswers = await inquirer.prompt(engineerQuestions);
  const managerAnswers = await inquirer.prompt(managerQuestions);
};

init();

module.exports = {
  teamNameAnswer,
  internAnswers,
  engineerAnswers,
  managerAnswers,
};
