import React, { useState } from 'react'
import './MovieCard.css'

const MovieCard = ({title, poster, rating, description,setselectedMovie, backdropPath}) => {
 
    const movieClicked = () => {
      setselectedMovie({movieTitle: title, MoviePoster: backdropPath, description: description})
    }
    
  return (
    <article className='Movie--Card' onClick={() => movieClicked()}>
        <img src={poster} alt={`${title} poster`}/>
        <div>
            <h3>{title}</h3>
            {/* <p className='description'>
                {description}
            </p> */}
            <span className='rating'>{rating}</span>
        </div>
    </article>
  )
}

export default MovieCard