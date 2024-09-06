import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';



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

  return (
    <div className="App">
        
        <Header setLanguage = {setLanguage} language= {language}/>
        <MainPage
          moviesData={moviesData}
          addToWishList={addToWishList}
          setAddToWishList={setAddToWishList}
          selectedMovie={selectedMovie}
          setSelectedMovie = {setselectedMovie}
        />
        <Footer/>
    </div>
  );
}

export default App;
