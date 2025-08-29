import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:8080/movies')
    .then(res => {
      if( res.status != 200 ){ throw new Error (res.statusText) };
      return res.json();
    })
    .then(data => setMovies(data))
    .catch(err => console.error(err));
  },[])

  return (
    <>
      {movies.map((e,i)=><p key={i}>{e.title} {e.main_character} {e.year_released}</p>)}
    </>
  )
}