import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import {createNote, updateNote, deleteNote} from '../utils/noteHelpers'

const STATUS_INTIAL_VALUE = ''

export default function Editor({selectedNote, setSelectedNote, refreshList}) {
  const [title, setTitle] = useState('')
  const [categories, setCategories] = useState('')
  const [body, setBody] = useState('')

  const [status, setStatus] = useState(STATUS_INTIAL_VALUE)
  const [alertVariant, setAlertVariant] = useState(STATUS_INTIAL_VALUE)

  const clearFields = () => {
    setTitle('')
    setCategories('')
    setBody('')
  }

  useEffect(() => {
    if (selectedNote) {
      return (
        setTitle(selectedNote.title),
        setCategories(selectedNote.categories),
        setBody(selectedNote.body)
      )
    }
    clearFields()
  }, [selectedNote])

  //Alert timeout when saving a note
  useEffect(() => {
    setTimeout(() => setStatus(STATUS_INTIAL_VALUE), 3000)
  }, [status])

  const onChangeTitle = (e) => setTitle(e.target.value)
  const onChangeCategories = (e) => setCategories(e.target.value)
  const onChangeBody = (e) => setBody(e.target.value)

  const onSave = (e) => {
    e.preventDefault()
    clearFields()
    setStatus('Saved!')
    setAlertVariant('success')
    if (selectedNote) {
      updateNote(selectedNote.id, title, categories, body)
      return refreshList()
    }
    createNote(title, categories, body)
    refreshList()
  }

  const onDelete = (e) => {
    e.preventDefault()
    const {id} = selectedNote
    deleteNote(id)
    refreshList()
    clearFields()
    setStatus('Deleted!')
    setAlertVariant('danger')
  }

  return (
    <Form>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control className="mb-4" size="lg" value={title} onChange={onChangeTitle} />
        <Form.Label>Categories</Form.Label>
        <Form.Control className="mb-4" size="lg" value={categories} onChange={onChangeCategories} />
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          className="mb-4"
          size="lg"
          value={body}
          onChange={onChangeBody}
        />
        <Button variant="success" className="mr-3" onClick={onSave}>
          Save
        </Button>
        {selectedNote && (
          <Button variant="danger" className="mr-3" onClick={onDelete}>
            Delete
          </Button>
        )}
        {status && <Alert variant={alertVariant}>{status}</Alert>}
      </Form.Group>
    </Form>
  )
}
