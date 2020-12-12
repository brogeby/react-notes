import React from 'react'
import en from '../constants/i18n/en.json'
import sv from '../constants/i18n/sv.json'
// <LanguageContext.Provider value={sv}></LanguageContext.Provider>

export const LanguageContext = React.createContext(null)

const getLanguageFromString = {
  sv,
  en,
}

export default function Context({children, lang}) {
  console.log(getLanguageFromString[lang])
  return (
    <LanguageContext.Provider value={getLanguageFromString[lang]}>
      {children}
    </LanguageContext.Provider>
  )
}
