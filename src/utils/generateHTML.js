const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

//make manager card
const generateManagerCard = (manager) => {
  return `<div class="manager-card">
    <h2>${manager.name}</h2>
    <h3>${manager.getRole()} <i class="fa-solid fa-paperclip"></i></h3>
    <ul>
        <li><h4>ID: ${manager.id}</h4></li>
        <li>
        <h4>Email: <a href="mailto:${manager.email}">Click here</a></h4>
        </li>
        <li><h4>Office Number: ${manager.officeNumber}</h4></li>
    </ul>
    </div>`;
};

//make engineer card
const generateEngineerCard = () => {
  return `  <div class="engineer-card">
    <h2>Fred</h2>
    <h3>
    Engineer <i class="fa-solid fa-wrench"></i>
    </h3>

    <ul>
    <li>
        <h4>ID: 2</h4>
    </li>
    <li>
        <h4>
        Email: <a href="mailto:fredfred@burger.com">Click here</a>
        </h4>
    </li>
    <li>
        <h4>
        Github:
        <a href="https://github.com/sophia4422" target="_blank">
            sophia4422
        </a>
        </h4>
    </li>
    </ul>
    </div>;`;
};

//make intern card
const generateInternCard = () => {
  return `<div class="intern-card">
    <h2 class="intern-title">Bob</h2>
    <h3>Intern <i class="fa-solid fa-graduation-cap"></i></h3>
    <ul>
      <li><h4>ID: 2</h4></li>
      <li>
        <h4>Email: <a href="mailto:fredfred@burger.com">Click here</a></h4>
      </li>
      <li><h4>School: Trinity High</h4></li>
    </ul>
  </div>`;
};

// generateHTML = () => {
//   cardArray = [];

//   if (role === "Manager") {
//     const managerCard = generateManagerCard(employee);

//     cardArray.push(managerCard);
//   }

//   if (role === "Engineer") {
//     const engineerCard = generateEngineerCard(employee);

//     cardArray.push(engineerCard);
//   }

//   if (role === "Intern") {
//     const internCard = generateInternCard(employee);

//     cardArray.push(internCard);
//   }

//   const employeeCards = cardArray.join("");

//   const generateTeamPage = teamPage(employeeCards);
//   return generateTeamPage;
// };

// generateHTML = ({ teamNameAnswer, manager, teamMembers }) => {};

//html page
const generateHTML = ({ teamNameAnswer, manager, teamMembers }) => {
  return `<!DOCTYPE html>
    <html>
        <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title></title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="./dist/assets/css/styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;500&display=swap"
            rel="stylesheet"
        />
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
            integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
        />
        </head>
        <body>
        <header class="header">
            <h1>Welcome to THE TEAM Profile</h1>
        </header>
    
        <div class="card-container">   
        ${employeeCards}
        </div>
        <script src="" async defer></script>
        </body>
    </html>
  `;
};

module.exports = generateHTML;
