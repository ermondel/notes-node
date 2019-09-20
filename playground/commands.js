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

    console.log('\n' + chalk.green('New note added.') + '\n');
  } else {
    console.log('\n' + chalk.yellow('Note title taken!') + '\n');
  }
};

const removeNote = title => {
  const notesList = notes.load();

  const notesFiltered = notesList.filter(note => note.title !== title);

  if (notesList.length > notesFiltered.length) {
    notes.save(notesFiltered);

    console.log('\n' + chalk.green('Note successfully deleted.') + '\n');
  } else {
    console.log('\n' + chalk.yellow('Note not found!') + '\n');
  }
};

module.exports = { getNotes, addNote, removeNote };
