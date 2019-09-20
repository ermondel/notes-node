const fs = require('fs');
const tasks = require('./tests/fixtures/tasks');

const PATH = 'notes.json';

const save = notes => {
  fs.writeFileSync(PATH, JSON.stringify(notes));
};

const load = () => {
  try {
    const data = fs.readFileSync(PATH);
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

const getTasksToDo = () => {
  if (tasks.length > 0) {
    return tasks.filter(note => note.completed === false);
  }
  return [];
};

module.exports = { save, load, getTasksToDo };
