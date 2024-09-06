import React from 'react'
import './Footer.css'
import tmdbLogo from '../../tmdbLOGO.svg'

const Footer = () => {
  return (
    <footer>
        <span>Data by</span>
        <img src={tmdbLogo} alt='TMDB Logo'/>     
    </footer>
  )
}

export default Footer