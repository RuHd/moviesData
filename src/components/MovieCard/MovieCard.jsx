import React, { useState }  from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import './MovieCard.css'

const MovieCard = ({title, poster, date, description,setselectedMovie, backdropPath, ID, setAddToWishList, addToWishList}) => {
  const [wishMovieClicked, setwishMovieClicked] = useState(false)
  const addToWishListBtn = () => {
    
    if(!wishMovieClicked) {
      setAddToWishList([...addToWishList, {movieID: ID, title: title, poster: poster, date: date}])
      setwishMovieClicked(true)
    } else {
      setAddToWishList(() => addToWishList.filter(movie => {
        if(movie.movieID !== ID) return movie
        return null
      }))
      setwishMovieClicked(false)
    }

    
  }  
  
  const movieClicked = () => {
      setselectedMovie({movieTitle: title, MoviePoster: backdropPath, description: description})
    }
    
  return (
    <article className='Movie--Card' >
        
        {date.split("-")[0] === "2024" && <span className='new--Movie'>NEW</span>}
        <img src={poster} alt={`${title} poster`} onClick={() => movieClicked()}/>
        <div>
            <h3>{title}</h3>
            <span className='date'>{date.split("-")[0]}</span>
        </div>
        <button className= {`btn--addToWishList ${wishMovieClicked ? 'animate-Heart' : ""}`} onClick={addToWishListBtn}>
                {!wishMovieClicked ? <FaRegHeart /> : <FaHeart/>}    
        </button>
    </article>
  )
}

export default MovieCard