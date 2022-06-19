const inquirer = require("inquirer");
const fs = require("fs");

//classes
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//html templates go here
// const addManagerCard = require("./src/cards/card-manager");
// const addEngineerCard = require("./src/cards/card-engineer");
// const addInternCard = require("./src/cards/card-intern");
// const wrapProfileCards = require("./src/cards/card-wrapper");

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
  {
    type: "list",
    name: "upNext",
    message: "What would you like to do next?",
    choices: ["Add Engineer", "Add Intern", "My team is complete!"],
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
  {
    type: "list",
    name: "upNext",
    message: "What would you like to do next?",
    choices: ["Add Engineer", "Add Intern", "My team is complete!"],
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
  {
    type: "list",
    name: "upNext",
    message: "What would you like to do next?",
    choices: ["Add Engineer", "Add Intern", "My team is complete!"],
  },
];

const askQuestions = async (questionArr) => {
  inquirer
    .prompt(questionArr)
    .then((member) => {
      team.push(member);

      if (member.upNext === "Add Engineer") {
        askQuestions(engineerQuestions);
      } else if (member.upNext === "Add Intern") {
        askQuestions(internQuestions);
      } else {
        createProfiles(team);
      }
    })
    .catch((err) => console.log(err));
};

const createProfiles = (team) => {
  const profiles = team.map(member) => {
    const { name, id, email } = member;
  }
};

askQuestions(managerQuestions);
