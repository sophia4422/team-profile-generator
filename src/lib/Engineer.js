const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, githubUsername) {
    super(name, id, email);

    this.githubUsername = githubUsername;
    this.role = "Intern";
  }

  getGithubUsername() {}

  getRole() {}
}

module.exports = Engineer;

// const engineerQuestions = [
//   {
//     type: "input",
//     name: "engineerName",
//     message: "Please enter Engineer's name:",
//   },
//   {
//     type: "input",
//     name: "engineerId",
//     message: "Please enter Engineer's ID number:",
//   },
//   {
//     type: "input",
//     name: "engineerEmail",
//     message: "Please enter the Engineer's Email address:",
//   },
//   {
//     type: "input",
//     name: "github",
//     message: "Please enter the Engineer's Github username:",
//   },
// ];
