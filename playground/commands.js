const chalk = require('chalk');
const notes = require('./notes');

const getNotes = () => {
  console.log(notes.getTasksToDo());
};

const addNote = (title, body) => {
  const notesList = notes.load();

  const duplicateFound = notesList.find(note => note.title === title);

  if (duplicateFound === undefined) {
    notesList.push({ title, body });
    notes.save(notesList);

    notes.print('New note added.', 'green');
  } else {
    notes.print('Note title taken!', 'yellow');
  }
};

const removeNote = title => {
  const notesList = notes.load();

  const notesFiltered = notesList.filter(note => note.title !== title);

  if (notesList.length > notesFiltered.length) {
    notes.save(notesFiltered);

    notes.print('Note successfully deleted.', 'green');
  } else {
    notes.print('Note not found!', 'yellow');
  }
};

const listNotes = () => {
  const notesList = notes.load();

  if (notesList.length) {
    notes.print('Your notes.', 'blue');

    let n = 0;
    let msg = '';

    for (let note of notesList) notes.printItem(++n, 'blue', note.title);
    console.log('\n');
  } else {
    notes.print('No notes.', 'orange');
  }
};

module.exports = { getNotes, addNote, removeNote, listNotes };
