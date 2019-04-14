const readline = require("readline");

const yesNoQuestion = function({ question, readLineInterface }) {
  if (!readLineInterface) {
    readLineInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  return new Promise(res => {
    readLineInterface.question(`${question} (y/j/n) `, answer => {
      res(answer);
      readLineInterface.close();
    });
  }).then(answer => {
    return ["y", "j"].indexOf(answer) >= 0;
  });
};

module.exports = {
  yesNoQuestion
};
