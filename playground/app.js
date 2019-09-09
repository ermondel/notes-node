const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes');
const msg = getNotes();

console.log(msg);
console.log(validator.isEmail('example@mail.com'));
console.log(validator.isURL('https://example.com'));

const greenMsg = chalk.green('Success!');
console.log(greenMsg);

const greenBoldMsg = chalk.green.bold('Success!');
console.log(greenBoldMsg);

const greenBoldInverseMsg = chalk.green.bold.inverse('Success!');
console.log(greenBoldInverseMsg);
