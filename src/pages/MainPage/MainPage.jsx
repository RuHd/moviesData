import React, { useContext, useEffect } from 'react'
import MovieInfo from '../../components/MovieInfo/MovieInfo'
import MovieCard from '../../components/MovieCard/MovieCard'
import './MainPage.css'
import myContext from '../../context'


const MainPage = () => {
  const MoviesDB = useContext(myContext)

  return (
    <main>
        <MovieInfo
          poster = {MoviesDB.selectedMovie.MoviePoster}
          title = {MoviesDB.selectedMovie.movieTitle}
          description = {MoviesDB.selectedMovie.description}
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
                      poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      description={movie.overview}
                      date={movie.release_date}
                      setselectedMovie = {MoviesDB.setselectedMovie}
                      backdropPath = {`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
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