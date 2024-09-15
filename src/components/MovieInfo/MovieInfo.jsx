import React from 'react'
import "./MovieInfo.css"
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import { useState } from 'react';


// Shows more detailed info from a clicked card movie
const MovieInfo = ({selectedMovie}) => {
  
  const [isClicked, setIsClicked] = useState(false)
  const arrowClick = () => {
      setIsClicked(!isClicked)
  }

 
  return (
    <article className={`Movie--Info ${isClicked ? "description--shown" : ""}`} style={{backgroundImage: `url(${selectedMovie.moviePoster})` }}>
        <section className='movie--description' style={ isClicked ? {transform: "translateY(20%)"} : {transform: "translateY(83%)"}}>
            <button onClick={arrowClick}>
                { isClicked ? <IoIosArrowDown  color='gold' size={30}/> : <IoIosArrowUp color='gold' size={30}/>}
            </button>
            <h2>{selectedMovie.movieTitle}</h2>
            <p className='description' >{selectedMovie.description}</p>
            
        </section>
    </article>
  )
}

export default MovieInfo