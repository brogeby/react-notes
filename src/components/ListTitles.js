import React, {useState} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import {getNotes} from '../utils/noteHelpers'

export default function ListTitles() {
  const [selectedNote, setSelectedNote] = useState(undefined)
  const onSelectNote = (note) => {
    setSelectedNote(note)
  }
  return (
    <ListGroup as="ul">
      {getNotes().map((note, index) => (
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
