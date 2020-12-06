// Create a note
// Read a note
// Update a note
// Delete a note

export const notes = [
  {
    id: '0',
    title: 'Another note',
    categories: ['spanish', 'english', 'german'],
    body: 'another note body',
  },
  {id: '1', title: 'A note', categories: 'test', body: 'Great note!'},
  {id: '2', title: 'Hoho', categories: 'test', body: 'Lorem ipsum'},
]

export const createNote = (note) => {
  console.log('Create Note')
}

export const getNote = (id) => {
  notes.find((element) => element.id === id)
  console.log('called id', id)
}

export const updateNote = (id, title, body) => {
  console.log('Update Note')
}

export const deleteNote = (id) => {
  console.log('Delete Note')
}
