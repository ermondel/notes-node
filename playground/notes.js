const fs = require('fs');
const chalk = require('chalk');
// const tasks = require('./tests/fixtures/tasks');

const PATH = 'notes.json';

const save = notes => {
  fs.writeFileSync(PATH, JSON.stringify(notes));
};

const load = () => {
  try {
    // return tasks;
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

const print = (msg, color) => {
  if (msg && color) {
    console.log('\n' + chalk.keyword(color)(msg) + '\n');
  } else if (msg) {
    console.log('\n' + msg + '\n');
  } else {
    console.log('\n');
  }
};

const printItem = (n, color, msg) => {
  console.log(`${chalk.keyword(color)(n + '.')} ${msg}`);
};

module.exports = { save, load, getTasksToDo, print, printItem };
