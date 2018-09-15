console.log('Starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');

const user = os.userInfo();

// test
const test_addNote = notes.addNote();
console.log('test addNote:', test_addNote);
const test_addNum = notes.add(9, -2);
console.log('test addNum:', test_addNum);
console.log(_.isString(true));
console.log(_.isString('bar'));
const test_filteredArray = _.uniq(['bar', 1, 'bar', 1, 2, 3, 4]);
console.log(test_filteredArray);

/*
fs.appendFile('greetings.txt', `Hello ${user.username}!`, err => {
    if (err) console.log('Unable to write to file.');
});
*/ 
