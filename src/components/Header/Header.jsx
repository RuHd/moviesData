import React from 'react'
import './Header.css'

const Header = ({setLanguage, language}) => {

  const changeLanguage = () => {
    setLanguage(language === "pt-BR" ? "en-US" : "pt-BR")
  }
  return (
    <header>
        <h2>MovyDB</h2>
        <p>Brought you by TMDB</p>
        <button onClick={changeLanguage}>{language === "pt-BR" ? "EN-US" : "PT-BR"}</button>
    </header>
  )
}

export default Header