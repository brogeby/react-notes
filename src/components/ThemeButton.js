import React from 'react'
import Button from 'react-bootstrap/Button'

export default function ThemeButton() {
  return (
    <Button onClick={() => alert('Helooooooo')} variant="secondary" className="mb-3">
      Change Theme
    </Button>
  )
}
