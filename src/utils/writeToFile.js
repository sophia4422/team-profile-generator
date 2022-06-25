const fs = require("fs");
const path = require("path");

const writeToFile = (htmlCard) => {
  const pathOfFile = path.join("./dist/index.html");

  fs.writeFileSync(pathOfFile, htmlCard);
};

module.exports = writeToFile;
