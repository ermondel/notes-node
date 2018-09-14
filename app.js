console.log('Starting app');

const fs = require('fs');

const os = require('os');

const notes = require('./notes');

const user = os.userInfo();

// test
const test_addNote = notes.addNote();
console.log('test addNote:', test_addNote);
const test_addNum = notes.add(9, -2);
console.log('test addNum:', test_addNum);

/*
fs.appendFile('greetings.txt', `Hello ${user.username}!`, err => {
    if (err) console.log('Unable to write to file.');
});
*/ 
