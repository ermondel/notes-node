const yargs = require('yargs');
const commands = require('./commands');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    commands.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    commands.removeNote(argv.title);
  }
});

yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler() {
    commands.listNotes();
  }
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    commands.readNote(argv.title);
  }
});

yargs.argv;

// console.log(validator.isEmail('example@mail.com'));
// console.log(validator.isURL('https://example.com'));
// const greenMsg = chalk.green('Success!');
// const greenBoldMsg = chalk.green.bold('Success!');
// const greenBoldInverseMsg = chalk.green.bold.inverse('Success!');
