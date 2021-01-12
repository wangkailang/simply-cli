const chalk = require('chalk');

function error(str) {
  console.log(chalk.redBright(str));
}

function success(str) {
  console.log(chalk.greenBright(str));
}

module.exports = {
  error,
  success,
}