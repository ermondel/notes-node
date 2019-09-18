const fs = require('fs');

const originalNote = {
  title: 'Some title',
  body: 'Some body'
};
const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);
note.title = 'Another title';
note.body = 'Another body';

const newNoteString = JSON.stringify(note);
fs.writeFileSync('notes.json', newNoteString);

// console.log(noteString);
// console.log(typeof note);
// console.log(note);
