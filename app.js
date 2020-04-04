const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Creade add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      description: 'Body of your note',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  },
})

// Creade rm command
yargs.command({
  command: 'rm',
  describe: 'Removing a new note',
  builder: {
    title: {
      describe: 'Title of the note to delete',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title)
  },
})

// Creade read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler() {
    console.log('Readed note')
  },
})

// Creade ls command
yargs.command({
  command: 'ls',
  describe: 'List all notes',
  handler() {
    console.log('List all notes')
  },
})

yargs.parse()
