const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const getAnswers = require("./utils/getAnswers");
const generateHTML = require("./utils/generateHTML");

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

const optionalQuestions = [
  {
    name: "employeeType",
    type: "list",
    message: "Would you like to add a team member or quit?",
    choices: [
      { key: "Engineer", value: "engineer" },
      { key: "Intern", value: "intern" },
      { key: "Quit", value: "quit" },
    ],
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

const allEmployees = async () => {
  const answersArray = [];

  let looping = true;
  while (looping) {
    const { employeeType } = await getAnswers(optionalQuestions);
    console.log("hello");
    //code is broken here
    if (employeeType === "engineer") {
      const engineerAnswers = await getAnswers(engineerQuestions);

      const engineer = new Engineer(engineerAnswers);
      console.log(engineer);
      answersArray.push(engineer);
    } else if (employeeType === "intern") {
      const internAnswers = await getAnswers(internQuestions);

      const intern = new Intern(internAnswers);
      answersArray.push(intern);
    } else {
      looping = false;
    }
  }
  return answersArray;
};

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
