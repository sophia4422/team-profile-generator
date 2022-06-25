//intern card

const internCard = (intern) => {
  return ` <div class="intern-card">
  <h2 class="intern-title">${intern.name}</h2>
  <h3>Intern <i class="fa-solid fa-graduation-cap"></i></h3>
  <ul>
    <li><h4>ID: ${intern.id}</h4></li>
    <li>
      <h4>Email: <a href="mailto:${intern.email}">Click here</a></h4>
    </li>
    <li><h4>School: ${intern.school}</h4></li>
  </ul>
</div>`;
};

module.exports = internCard;
