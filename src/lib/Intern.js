const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
    this.role = "Intern";
  }

  getSchool() {}

  getRole() {}
}

module.exports = Intern;

// const internQuestions = [
//   {
//     type: "input",
//     name: "internName",
//     message: "Please enter Intern's name:",
//   },
//   {
//     type: "input",
//     name: "internId",
//     message: "Please enter Intern's ID number:",
//   },
//   {
//     type: "input",
//     name: "internEmail",
//     message: "Please enter the Intern's Email address:",
//   },
//   {
//     type: "input",
//     name: "internSchool",
//     message: "Please enter the Intern's school:",
//   },
// ];
