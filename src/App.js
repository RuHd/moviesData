import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import MovieCard from './components/MovieCard/MovieCard';
import Header from './components/Header/Header';
import MovieInfo from './components/MovieInfo/MovieInfo';


function App() {
  const [moviesData, setmoviesData] = useState(null)
  const [language, setLanguage] = useState("pt-BR")
  const [selectedMovie, setselectedMovie] = useState({})

  useEffect(() => {
    const getData = () => {
       axios({
        url: 'https://api.themoviedb.org/3/discover/movie',
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDUwM2Q3MGE3YWQ2OTRiYzdhODI0YjJhYWU3NzIwMiIsIm5iZiI6MTcyNDk1MTgzNC40NjE3NTksInN1YiI6IjY2Y2RkN2IwOGYyMGMxNTllYTk3ZDIwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M7yrL3rEfQG1yban5qjWH6vK9jfzB17jXY3xhFppawc'
        },
        params: {
          page: 10,
          language: language
        }
      }).then( response => {
        setmoviesData(response.data.results)
      }).then( () => {
        setselectedMovie({MoviePoster: `https://image.tmdb.org/t/p/original${moviesData[0].backdrop_path}`, movieTitle: moviesData[0].title, description: moviesData[0].overview})
      })
    }
    getData()
  }, [language])

  console.log(moviesData)
  return (
    <div className="App">
        <Header setLanguage = {setLanguage} language= {language}/>
        <MovieInfo
          poster = {selectedMovie.MoviePoster}
          title = {selectedMovie.movieTitle}
          description = {selectedMovie.description}
        />
        <section className='carousel--poster'> 
          <h2>Top Movies</h2>  
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
                      rating={movie.vote_average}
                      setselectedMovie = {setselectedMovie}
                      backdropPath = {`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    />
                  )
                } 

                return ""
              })
            }         
          </div>     
        </section>
        
    </div>
  );
}

export default App;
