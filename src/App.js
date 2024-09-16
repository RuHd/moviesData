import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MyContext from './context'
import MainPage from './pages/MainPage/MainPage';
import WishList from './pages/wishList/WishList';

function App() {
  const [moviesData, setmoviesData] = useState([])
  const [isDataLoaded, setisDataLoaded] = useState(false)
  const [language, setLanguage] = useState("pt-BR")
  const [addToWishList, setAddToWishList] = useState([])
  const [openWishPage, setopenWishPage] = useState(false)

  useEffect(() => {
    const getData = async () => {
      
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
         setisDataLoaded(true)
      })
    }
    getData()
  }, [language])
  return (
    <MyContext.Provider value={{moviesData,setmoviesData, addToWishList, setAddToWishList}}>
      <div className="App">
          <Header setLanguage = {setLanguage} language= {language} setopenWishPage = {setopenWishPage} openWishPage = {openWishPage}/>
  
          {openWishPage === false && isDataLoaded && <MainPage/>}
          {openWishPage && <WishList/>}

          <Footer/>
      </div>
    </MyContext.Provider>
  );
}

export default App;
