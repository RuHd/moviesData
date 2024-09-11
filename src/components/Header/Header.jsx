import React, { useContext } from 'react'
import './Header.css'
import usFlag from '../../usFlag.png'
import brFlag from '../../brFlag.png'
import { Link } from 'react-router-dom'
import myContext from '../../context'


const Header = ({setLanguage, setopenWishPage}) => {

  return (
    <header>
        <h2>MovyDB</h2>
        <nav>
          <button onClick={() => setopenWishPage(false)}>Home</button>
          <button onClick={() => setopenWishPage(true)}>Wishlist</button>
        </nav>
        
        <div className='btns--container'>
          <button onClick={() => setLanguage("en-US")}>
              <img src= {usFlag} alt="US Flag"/>
          </button>
          <button onClick={() => setLanguage("pt-BR")}>
              <img src= {brFlag} alt="BR Flag"/>
          </button>
        </div>
        
    </header>
  )
}

export default Header