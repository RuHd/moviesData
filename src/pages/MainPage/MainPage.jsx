import React, { useContext, useState } from 'react'
import MovieInfo from '../../components/MovieInfo/MovieInfo'
import MovieCard from '../../components/MovieCard/MovieCard'
import './MainPage.css'
import myContext from '../../context'
import IMG_URL from '../../utils'



// Main Page that shows wishlist or movie list
const MainPage = () => {
  const MoviesDB = useContext(myContext)
  const [selectedMovie, setselectedMovie] = useState({
    moviePoster: IMG_URL + MoviesDB.moviesData[0].backdrop_path,
    movieTitle: MoviesDB.moviesData[0].title,
    description: MoviesDB.moviesData[0].overview
  
  })

  console.log(MoviesDB.addToWishList)
  return (
    <main>
        <MovieInfo
          selectedMovie = {selectedMovie}
        />
        <h2>Top Movies</h2>  
        <section className='carousel--poster'> 
          
          <ul className='list--poster'>
            {
              MoviesDB.moviesData !== null && MoviesDB.moviesData.map((movie) => {
                if (movie.overview.length > 1) {
                  return (
                    <MovieCard
                      key={movie.id}
                      title={movie.title}
                      poster={movie.poster_path}
                      description={movie.overview}
                      date={movie.release_date}
                      setselectedMovie = {setselectedMovie}
                      backdropPath = {movie.backdrop_path}
                      setAddToWishList = {MoviesDB.setAddToWishList}
                      addToWishList = {MoviesDB.addToWishList}
                      ID= {movie.id}
                    />
                  )
                } return ""
              })
            }         
          </ul>     
        </section>
    </main>
  )
}

export default MainPage