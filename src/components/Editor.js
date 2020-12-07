import React from 'react'
import Form from 'react-bootstrap/Form'
import {IconTitle, IconCategories, IconContent} from '../constants/Icons'

function Editor() {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control className="mb-4" size="lg" />
          <Form.Label>Category</Form.Label>
          <Form.Control className="mb-4" size="lg" />
          <Form.Label>Note</Form.Label>
          <Form.Control as="textarea" size="lg" />
        </Form.Group>
      </Form>
    </>
  )
}

export default Editor
