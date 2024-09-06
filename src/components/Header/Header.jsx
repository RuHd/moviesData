import React from 'react'
import './Header.css'
import usFlag from '../../usFlag.png'
import brFlag from '../../brFlag.png'

const Header = ({setLanguage}) => {
  return (
    <header>
        <h2>MovyDB</h2>
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