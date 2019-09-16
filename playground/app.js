const yargs = require('yargs');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function() {
    console.log('Adding a new note');
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function() {
    console.log('Removing the note');
  }
});

yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: function() {
    console.log('Listing out all note');
  }
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function() {
    console.log('Reading a note');
  }
});

console.log(yargs.argv);

// console.log(validator.isEmail('example@mail.com'));
// console.log(validator.isURL('https://example.com'));
// const greenMsg = chalk.green('Success!');
// const greenBoldMsg = chalk.green.bold('Success!');
// const greenBoldInverseMsg = chalk.green.bold.inverse('Success!');
