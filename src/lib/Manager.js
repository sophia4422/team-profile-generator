const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
    this.role = "Manager";
  }
  getOfficeNumber() {}
}

module.exports = Manager;

// const managerQuestions = [
//   {
//     type: "input",
//     name: "managerName",
//     message: "Please enter the Manager's name:",
//   },
//   {
//     type: "input",
//     name: "managerId",
//     message: "Please enter the Manager's ID number:",
//   },
//   {
//     type: "input",
//     name: "managerEmail",
//     message: "Please enter the Manager's Email address:",
//   },
//   {
//     type: "input",
//     name: "managerNumber",
//     message: "Please enter the Manager's Office Number:",
//   },
// ];
