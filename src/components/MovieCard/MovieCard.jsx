import React, { useState } from 'react'
import './MovieCard.css'

const MovieCard = ({title, poster, rating, description}) => {
    const [isClicked, setIsClicked] = useState(false)
  
    console.log(isClicked)
  return (
    <article className='Movie--Card' onClick={() => setIsClicked(!isClicked)}>
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