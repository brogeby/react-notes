// Create a note
// Read a note
// Update a note
// Delete a note

const notes = [
  {
    id: '1',
    title: 'Another note',
    categories: ['spanish', 'english', 'german'],
    body: 'another note body',
  },
  {id: '2', title: 'A note', categories: 'test', body: 'Great note!'},
  {id: '3', title: 'Hoho', categories: 'test', body: 'Lorem ipsum'},
]

export const createNote = (title, categories, body) => {
  const note = {
    id: notes.length + 1,
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

export function getNotes() {
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
  return note
}

export const deleteNote = (id) => {
  const indexToDelete = notes.findIndex((note) => note.id === id)
  notes.splice(indexToDelete, 1)
  return true
}
