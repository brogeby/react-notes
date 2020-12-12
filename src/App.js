import React, {useState, useEffect} from 'react'

//Import Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

//Import Components
import Editor from './components/Editor'
import ListTitles from './components/ListTitles'
import LangButton from './components/LangButton'
import Jumbo from './components/Jumbo'

//Import Others
import {getLocalNotes} from './utils/noteHelpers'
import LanguageProvider, {LanguageContext} from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider lang="sv">
      <NoteWrapper />
    </LanguageProvider>
  )
}

function NoteWrapper() {
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

  const lang = React.useContext(LanguageContext)

  return (
    <Container>
      <Jumbo />
      <Row>
        <Col xs={12} md={12}>
          <Button onClick={onClickNewNote} variant="dark" className="mb-3">
            {lang['new_note']}
          </Button>
          {/* <ThemeButton /> */}
          <LangButton />
          <Editor refreshList={refreshList} selectedNote={selectedNote} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="mt-5">
          <ListTitles notes={notes} selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
