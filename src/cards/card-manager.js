//manager card

const managerCard = (manager) => {
  return `<div class="manager-card">
  <h2>${manager.name}</h2>
  <h3>Manager <i class="fa-solid fa-paperclip"></i></h3>
  <ul>
    <li><h4>ID: ${manager.id}</h4></li>
    <li>
      <h4>Email: <a href="mailto:${manager.email}">Click here</a></h4>
    </li>
    <li><h4>Office Number: ${manager.officeNumber}</h4></li>
  </ul>
  </div>`;
};

module.exports = managerCard;
