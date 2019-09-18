const fs = require('fs');

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

module.exports = { save, load };
