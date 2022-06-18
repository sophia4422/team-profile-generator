//make manager card
const generateManagerCard = () => {
  return `<div class="manager-card">
    <h2>Sally</h2>
    <h3>Manager <i class="fa-solid fa-paperclip"></i></h3>
    <ul>
        <li><h4>ID: 1</h4></li>
        <li>
        <h4>Email: <a href="mailto:fredfred@burger.com">Click here</a></h4>
        </li>
        <li><h4>Office Number: 123456</h4></li>
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

generateHTML = () => {
  if (role === "Manager") {
  }
};

//html page
const teamPage = () => {
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
        </div>
        <script src="" async defer></script>
        </body>
    </html>
  `;
};

module.exports = generateHTML;
