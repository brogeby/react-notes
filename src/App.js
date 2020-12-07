import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css'

import Editor from './components/Editor'
import ListTitles from './components/ListTitles'
// import ListCategories from './components/ListCategories'

import {createNote, getNote, updateNote, deleteNote} from './utils/noteHelpers'

createNote(3)
getNote(3)
updateNote(3)
deleteNote(3)

function App() {
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
          <Button variant="primary" className="mb-3">
            New Note
          </Button>
          <Editor />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="success" className="mr-3">
            Save
          </Button>
          <Button variant="danger" className="mr-3">
            Delete
          </Button>
        </Col>
      </Row>
      <Row>
        {/* <Col xs={12} md={6}>
          <h2>Categories</h2>
          <ListCategories />
        </Col> */}
        <Col xs={12} md={6} className="mt-5">
          <ListTitles />
        </Col>
      </Row>
    </Container>
  )
}

export default App
