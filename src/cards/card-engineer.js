//engineer card

const engineerCard = (engineer) => {
  return `<div class="engineer-card">
<h2>${engineer.name}</h2>
<h3>Engineer <i class="fa-solid fa-wrench"></i></h3>

<ul>
  <li><h4>ID: ${engineer.id}</h4></li>
  <li>
    <h4>Email: <a href="mailto:${engineer.email}">Click here</a></h4>
  </li>
  <li>
    <h4>
      Github:
      <a href="https://github.com/${engineer.github}" target="_blank"
        >${engineer.github}</a
      >
    </h4>
  </li>
</ul>
</div>`;
};

module.exports = engineerCard;
