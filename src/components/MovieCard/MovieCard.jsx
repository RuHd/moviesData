import React, { useState } from 'react'
import './MovieCard.css'

const MovieCard = ({title, poster, date, description,setselectedMovie, backdropPath}) => {
 
    const movieClicked = () => {
      setselectedMovie({movieTitle: title, MoviePoster: backdropPath, description: description})
    }
    
  return (
    <article className='Movie--Card' onClick={() => movieClicked()}>
        {date.split("-")[0] === "2024" && <span className='new--Movie'>NEW</span>}
        <img src={poster} alt={`${title} poster`}/>
        <div>
            <h3>{title}</h3>
            <span className='date'>{date.split("-")[0]}</span>
        </div>
    </article>
  )
}

export default MovieCard