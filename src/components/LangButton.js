import React, {useContext} from 'react'
import Button from 'react-bootstrap/Button'
import {LanguageContext} from '../context/LanguageContext'

export default function LangButton() {
  const lang = useContext(LanguageContext)

  return (
    <Button onClick={() => alert('Helooooooo')} variant="secondary" className="mb-3">
      {lang['change_lang']}
    </Button>
  )
}
