const initializeNotes = () => {
  //Set Localstorage for the first time
  localStorage.setItem('notes', JSON.stringify([]))
  //Returns an array
  return []
}

export const deleteLocalNote = (id) => {
  const notes = getLocalNotes()
  const indexToDelete = notes.findIndex((note) => note.id === id)
  if (indexToDelete >= 0) notes.splice(indexToDelete, 1)
  const stringifiedNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', stringifiedNoteArray)
}

export const getLocalNotes = () => {
  let notes = localStorage.getItem('notes')
  if (!notes) {
    notes = initializeNotes()
  }
  const jsonNotes = JSON.parse(notes)
  return jsonNotes
}

export const getNote = (id) => {
  const notes = localStorage.getItem('notes')
  return notes.find((note) => note.id === id)
}

export const createLocalNote = (title, categories, body) => {
  const notes = getLocalNotes()

  const newNote = {
    id: Date.now(),
    title,
    categories,
    body,
  }
  notes.push(newNote)
  const stringifiedNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', stringifiedNoteArray)
}

export const updateLocalNote = (id, title, categories, body) => {
  const notes = getLocalNotes()
  const indexToUpdate = notes.findIndex((note) => note.id === id)
  const note = {
    id,
    title,
    categories,
    body,
  }
  notes.splice(indexToUpdate, 1, note)
  const stringifiedNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', stringifiedNoteArray)
}
