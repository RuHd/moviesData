import React from 'react'
import './Footer.css'
import tmdbLogo from '../../tmdbLOGO.svg'

const Footer = () => {
  return (
    <footer>
        <p>Data by</p>
        <img src={tmdbLogo} alt='TMDB Logo'/>     
    </footer>
  )
}

export default Footer