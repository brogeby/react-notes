import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default function ListTitles({selectedNote, setSelectedNote, notes}) {
  const onSelectNote = (note) => {
    setSelectedNote(note)
  }

  if (!notes.length) return <p>Add a note to display the list</p>

  return (
    <ListGroup as="ul">
      {notes.map((note, index) => (
        <ListGroup.Item
          active={selectedNote ? note.id === selectedNote.id : false}
          onClick={() => onSelectNote(note)}
          as="li"
          key={note.id}
        >
          {note.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
