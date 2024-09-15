import React, { useEffect, useState }  from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import './MovieCard.css'
import IMG_URL from '../../utils';


// Movie Card component with favorite button
const MovieCard = ({title, poster, date, description,setselectedMovie, backdropPath, ID, setAddToWishList, addToWishList, inWishList = false}) => {
  
  const [wishMovieClicked, setwishMovieClicked] = useState(false)
  const addToWishListBtn = () => {
    if(!wishMovieClicked) {
      
      if(!addToWishList.some(movie => movie.movieID === ID)) {
        setAddToWishList([...addToWishList, {movieID: ID, title: title, poster: poster, date: date}])
        
      }
    } 
    setwishMovieClicked(!wishMovieClicked)
  }  
  const movieClicked = () => {
      setselectedMovie({moviePoster: IMG_URL + backdropPath, movieTitle: title,  description: description})
    }
  const removeFromWishList = () => {
    setAddToWishList(() => addToWishList.filter(movie => {
      if(movie.movieID !== ID) return movie
      return null
    }))
  }

  return (
    <article className='Movie--Card' >
        
        {date.split("-")[0] === "2024" && <span className='new--Movie'>NEW</span>}
        <img src={IMG_URL + poster} alt={`${title} poster`} onClick={() => movieClicked()}/>
        <div>
            <h3>{title}</h3>
            <span className='date'>{date.split("-")[0]}</span>
        </div>

        {!inWishList &&
          <button className= {`btn--addToWishList ${wishMovieClicked ? 'animate-Heart' : ""}`} onClick={addToWishListBtn}>
                  {(!wishMovieClicked ) && <FaRegHeart /> }
                  {(wishMovieClicked || inWishList) && <FaHeart/>}    
          </button>
        }
        {inWishList && 
          <button onClick={() => removeFromWishList()} className='removeBtn'>
            remove
          </button>
        }
    </article>
  )
}

export default MovieCard