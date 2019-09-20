const chalk = require('chalk');
const notes = require('./notes');

const addNote = (title, body) => {
  const notesList = notes.load();

  const duplicateFound = notesList.find(note => note.title === title);

  if (duplicateFound === undefined) {
    notesList.push({ title, body });
    notes.save(notesList);

    notes.print('New note added.', 'green');
  } else {
    notes.print('Note title taken!', 'orange');
  }
};

const removeNote = title => {
  const notesList = notes.load();

  const notesFiltered = notesList.filter(note => note.title !== title);

  if (notesList.length > notesFiltered.length) {
    notes.save(notesFiltered);

    notes.print('Note successfully deleted.', 'green');
  } else {
    notes.print('Note not found!', 'orange');
  }
};

const listNotes = () => {
  const notesList = notes.load();

  if (notesList.length) {
    notes.print('Your notes', 'blue');

    let n = 0;
    for (let note of notesList) notes.printItem(++n, 'blue', note.title);

    notes.print();
  } else {
    notes.print('The list of notes is empty.', 'orange');
  }
};

const readNote = title => {
  const notesList = notes.load();

  if (notesList.length) {
    const note = notesList.find(note => note.title === title);

    if (note !== undefined) {
      notes.print(note.title, 'blue');
      notes.print(note.body);
    } else {
      notes.print('Note not found.', 'orange');
    }
  } else {
    notes.print('The list of notes is empty.', 'orange');
  }
};

module.exports = { addNote, removeNote, listNotes, readNote };
