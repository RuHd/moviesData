import React from 'react'
import MovieInfo from '../../components/MovieInfo/MovieInfo'
import MovieCard from '../../components/MovieCard/MovieCard'
import './MainPage.css'

const MainPage = ({moviesData, addToWishList, setAddToWishList, selectedMovie, setSelectedMovie}) => {
  return (
    <main>
        <MovieInfo
          poster = {selectedMovie.MoviePoster}
          title = {selectedMovie.movieTitle}
          description = {selectedMovie.description}
        />
        <h2>Top Movies</h2>  
        <section className='carousel--poster'> 
          
          <div className='list--poster'>
            {
              moviesData !== null && moviesData.map((movie) => {
                if (movie.overview.length > 1) {
                  return (
                    <MovieCard
                      key={movie.id}
                      title={movie.title}
                      poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      description={movie.overview}
                      date={movie.release_date}
                      setselectedMovie = {setSelectedMovie}
                      backdropPath = {`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                      setAddToWishList = {setAddToWishList}
                      addToWishList = {addToWishList}
                      ID= {movie.id}
                    />
                  )
                } return ""
              })
            }         
          </div>     
        </section>
    </main>
  )
}

export default MainPage