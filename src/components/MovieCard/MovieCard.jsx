import React, { useMemo, useState }  from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import './MovieCard.css'

const MovieCard = ({title, poster, date, description,setselectedMovie, backdropPath, ID, setAddToWishList, addToWishList, inWishList}) => {

  const [wishMovieClicked, setwishMovieClicked] = useState(false)

  useMemo(() => wishMovieClicked, [wishMovieClicked])
  const addToWishListBtn = () => {
    
    if(!wishMovieClicked) {
      setAddToWishList([...addToWishList, {movieID: ID, title: title, poster: poster, date: date}])
      setwishMovieClicked(true)
    } 

  }  
  
  const movieClicked = () => {
      setselectedMovie({movieTitle: title, MoviePoster: backdropPath, description: description})
    }

  const removeFromWishList = () => {
    debugger
    setAddToWishList(() => addToWishList.filter(movie => {
      if(movie.movieID !== ID) return movie
      return null
    }))
  }
  return (
    <article className='Movie--Card' >
        
        {date.split("-")[0] === "2024" && <span className='new--Movie'>NEW</span>}
        <img src={poster} alt={`${title} poster`} onClick={() => movieClicked()}/>
        <div>
            <h3>{title}</h3>
            <span className='date'>{date.split("-")[0]}</span>
        </div>

        {!inWishList &&
          <button className= {`btn--addToWishList ${wishMovieClicked ? 'animate-Heart' : ""}`} onClick={addToWishListBtn}>
                  {!wishMovieClicked || inWishList ? <FaRegHeart /> : <FaHeart/>}    
          </button>
        }
        {inWishList && 
          <button onClick={() => removeFromWishList()}>
            remove
          </button>
        }
    </article>
  )
}

export default MovieCard