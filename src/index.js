const inquirer = require("inquirer");
const fs = require("fs");

//classes
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//html templates go here

//team members array
const team = [];

const teamNameQuestion = [
  {
    name: "teamName",
    type: "input",
    message: "What is the name of your team?",
  },
];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter the Manager's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the Manager's ID number:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the Manager's Email address:",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Please enter the Manager's Office Number:",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter Engineer's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter Engineer's ID number:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the Engineer's Email address:",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Please enter the Engineer's Github username:",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter Intern's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter Intern's ID number:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the Intern's Email address:",
  },
  {
    type: "input",
    name: "internSchool",
    message: "Please enter the Intern's school:",
  },
];

const init = async () => {
  const teamNameAnswer = await getAnswers(teamNameQuestion);
  const managerAnswers = await getAnswers(managerQuestions);
  const manager = new Manager(managerAnswers);
  const teamMembers = await allEmployees();

  console.log(teamNameAnswer, manager, teamMembers);

  const htmlCard = generateHTML({ teamNameAnswer, manager, teamMembers });

  writeToFile(htmlCard);
};

init();
