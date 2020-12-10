// Create a note
// Read a note
// Update a note
// Delete a note

const notes = [
  {
    id: '1',
    title: 'A note',
    categories: ['spanish', 'english', 'german'],
    body: 'Note 1 Description',
  },
  {id: '2', title: 'Note 2', categories: 'c2', body: 'Note 2 Description'},
  {id: '3', title: 'Note 3', categories: 'c3', body: 'Note 3 Description'},
]

export const createNote = (title, categories, body) => {
  const note = {
    id: Date.now(),
    title,
    categories,
    body,
  }
  notes.push(note)
  return note
}

export const getNote = (id) => {
  return notes.find((note) => note.id === id)
}

export const getNotes = () => {
  return notes
}

export const updateNote = (id, title, categories, body) => {
  const indexToUpdate = notes.findIndex((note) => note.id === id)
  const note = {
    id,
    title,
    categories,
    body,
  }
  notes.splice(indexToUpdate, 1, note)
  return notes
}

export const deleteNote = (id) => {
  const indexToDelete = notes.findIndex((note) => note.id === id)
  if (indexToDelete >= 0) notes.splice(indexToDelete, 1)
  return true
}
