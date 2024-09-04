import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import MovieCard from './components/MovieCard/MovieCard';
import Header from './components/Header/Header';
import MovieInfo from './components/MovieInfo/MovieInfo';
import Footer from './components/Footer/Footer';



function App() {
  const [moviesData, setmoviesData] = useState([])
  const [language, setLanguage] = useState("pt-BR")
  const [selectedMovie, setselectedMovie] = useState({})
  const [addToWishList, setAddToWishList] = useState([])

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
         
      })
    }
    getData()
    
  }, [language])
    console.log(addToWishList)
  return (
    <div className="App">
        
        <Header setLanguage = {setLanguage} language= {language}/>
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
                      setselectedMovie = {setselectedMovie}
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
        <Footer/>
    </div>
  );
}

export default App;
