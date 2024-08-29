import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'


function App() {
  const [moviesData, setmoviesData] = useState(null)
  const [language, setLanguage] = useState("pt-BR")
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
        console.log(response)
        setmoviesData(response.data.results)
        
      })
    
    }

    getData()
  }, [language])
  console.log(moviesData)
  return (
    <div className="App">
        <button onClick={() => language === "pt-BR" ? setLanguage("en-US") : setLanguage("pt-BR")}>{language === "pt-BR" ? "Mudar para Inglês" : "Change to Portuguese"}</button>
        {
          moviesData !== null && moviesData.map((movie) => {
            if (movie.overview.length > 1) {
              return (

                <section key={movie.id} className='movie--card'>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.title} poster`}/>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>

                    <div>
                      <span>{movie.vote_average} / 10</span>
                    </div>
                </section>
              )
            } 

            return ""
          })
        }
        
    </div>
  );
}

export default App;
