import {useEffect} from 'react'
import './App.css';

const BASE_URL = "https://api.themoviedb.org/3/authentication"

const URL = 'https://api.themoviedb.org/3/account/21469114/lists?page=1';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDUwM2Q3MGE3YWQ2OTRiYzdhODI0YjJhYWU3NzIwMiIsIm5iZiI6MTcyNDg0ODQ2OC44NDYwNSwic3ViIjoiNjZjZGQ3YjA4ZjIwYzE1OWVhOTdkMjA4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.vjVxcGIyud0lscOJcU6AKoNQPigdavet7xvtO4BaIJ4'
  }
};


function App() {
  useEffect(() => {
    const getData = async () => {
      // const res = await fetch(BASE_URL, options)
      // const data = await res.json()

      const restwo = await fetch(URL, options)

      const data2 = await restwo.json()

      console.log(data2)
    }

    getData()
  }, [])
  return (
    <div className="App">
        
        
        
    </div>
  );
}

export default App;
