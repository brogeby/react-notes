import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import {IconTitle, IconCategories, IconContent} from '../constants/Icons'

function Editor() {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="title">
            <IconTitle />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl placeholder="Title" aria-label="Title" aria-describedby="title" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="categories">
            <IconCategories />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Categories"
          aria-label="Categories"
          aria-describedby="categories"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="content">
            <IconContent />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl placeholder="Content" aria-label="Content" aria-describedby="content" />
      </InputGroup>
    </>
  )
}

export default Editor
