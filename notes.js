const fs = require('fs')
const chalk = require('chalk')
const success = chalk.bold.green
const error = chalk.bold.red
const header = chalk.bold.yellow

const getNotes = () => {
  return 'Your notes...'
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter((note) => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    })
    saveNotes(notes)
    console.log(success('New note added!'))
  } else {
    console.log(error('Note title taken!'))
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title)
  if (notes.length > notesToKeep.length) {
    console.log(success('Removed note!'))
    saveNotes(notesToKeep)
  } else {
    console.log(error('Title does not exist!'))
  }
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(header('Your notes: '))
  notes.forEach((note) => {
    console.log(note.title)
  })
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
}
