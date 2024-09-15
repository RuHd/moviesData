import React, { useContext } from 'react'
import './Wishlist.css'
import myContext from '../../context'
import MovieCard from '../../components/MovieCard/MovieCard'


const WishList = () => {
  const contextDB = useContext(myContext)

  return (
    <div className={`wishlist ${contextDB.addToWishList.length == 0 ? "noContent" : ""}`}>
      <h2>Wish List</h2>
        {contextDB.addToWishList.length === 0 && <p>Add Movies to WishList in Home Page!</p>}
      <section className='wishlist--carousel--poster'>
        <ul className={`wishlist--list--poster ${contextDB.addToWishList.length === 1 && "centerSingleCard"}`}>
            {contextDB.addToWishList.length > 0 && contextDB.addToWishList.map((movie, i) => {
            return (
              <li>
                  <MovieCard
                    key={movie.movieID}
                    title={movie.title}
                    ID = {movie.movieID}
                    poster={movie.poster}
                    date={movie.date}
                    inWishList = {true}
                    setAddToWishList={contextDB.setAddToWishList}
                    addToWishList={contextDB.addToWishList}
                  />
                </li>
            )
            })}
        </ul>
      </section>
    </div>
  )
}

export default WishList