const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Creade add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      description: "Body of your note",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    console.log("Title: " + argv.title);
    console.log("Body: " + argv.body);
  }
});

// Creade rm command
yargs.command({
  command: "rm",
  describe: "Removing a new note",
  handler: function() {
    console.log("Removed a new note!");
  }
});

// Creade read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function() {
    console.log("Readed note");
  }
});

// Creade ls command
yargs.command({
  command: "ls",
  describe: "List all notes",
  handler: function() {
    console.log("List all notes");
  }
});

yargs.parse();
