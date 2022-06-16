const inquirer = require("inquirer");

const fs = require("fs");

const basicQuestions = () => {
    const questions = [
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the employee's ID?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the employee's email address?",
            name: "email",
        },
    ];

}

module.exports = {
    basicQuestions
}

const init = async () = {

    const answers = await inquirer.prompt(questions);
};

init();