import React from 'react'
import './Header.css'
import usFlag from '../../usFlag.png'
import brFlag from '../../brFlag.png'


const Header = ({setLanguage, setopenWishPage, openWishPage}) => {

  return (
    <header>
        <h2>MovyDB</h2>
        <nav>
          <button onClick={() => setopenWishPage(false)} className={`${!openWishPage && "currentPage"}` }>Home</button>
          <button onClick={() => setopenWishPage(true)} className={`${openWishPage && "currentPage"}` }>Wishlist</button>
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