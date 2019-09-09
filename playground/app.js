const validator = require('validator');
const getNotes = require('./notes');
const msg = getNotes();
console.log(msg);
console.log(validator.isEmail('example@mail.com'));
console.log(validator.isURL('https://example.com'));
