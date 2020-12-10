import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css'
import Editor from './components/Editor'
import ListTitles from './components/ListTitles'
import ThemeButton from './components/ThemeButton'
import {getLocalNotes} from './utils/noteHelpers'

getLocalNotes()

function App() {
  const [selectedNote, setSelectedNote] = useState(undefined)
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const notes = getLocalNotes()
    setNotes(notes)
  }, [])

  const refreshList = () => {
    setSelectedNote(undefined)
    const notes = getLocalNotes()
    setNotes([...notes])
  }

  const onClickNewNote = () => {
    setSelectedNote(undefined)
  }

  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron style={{textAlign: 'center'}} fluid>
            <h1>Notes</h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <Button onClick={onClickNewNote} variant="dark" className="mb-3">
            New Note
          </Button>
          <ThemeButton />
          <Editor refreshList={refreshList} selectedNote={selectedNote} />
        </Col>
      </Row>
      <Row>
        {/* <Col xs={12} md={6}>
          <h2>Categories</h2>
          <ListCategories />
        </Col> */}
        <Col xs={12} md={6} className="mt-5">
          <ListTitles notes={notes} selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
