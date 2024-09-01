import React from 'react'
import "./MovieInfo.css"
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { useState } from 'react';

const MovieInfo = ({poster,title, description}) => {

  const [isClicked, setIsClicked] = useState(false)

  const arrowClick = () => {
      setIsClicked(!isClicked)
  }

 
  return (
    <main className={`Movie--Info ${isClicked ? "description--shown" : ""}`} style={{backgroundImage: `url(${poster})` }}>
        <section className='movie--description' style={ isClicked ? {transform: "translateY(20%)"} : {transform: "translateY(82%)"}}>
            <button onClick={arrowClick}>
                { isClicked ? <FaArrowCircleDown color='gold' size={30}/> : <FaArrowCircleUp color='gold' size={30}/>}
            </button>
            <h2>{title}</h2>
            <p className='description' >{description}</p>
        </section>
    </main>
  )
}

export default MovieInfo