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

  /**
   *
   * @param {Event} e
   */
  function submitHandler(e){
    e.preventDefault();
    const payload = {
      "title": e.target[0].value,
      "main_character": e.target[1].value,
      "year_released": e.target[2].value
    }
    console.log(payload);
    console.log(JSON.stringify(payload))
    fetch('http://localhost:8080/movies', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(payload)
    })
    .then(res => console.log(res.status))
    .catch(err => console.error(err));

  }

  return (
    <>
      <form onSubmit={(e)=>{submitHandler(e)}}>
        <h2>Add a Movie!</h2>
        <input type="text" name="title" id="title" maxLength="256" />
        <input type="text" name="main-character" id="main-character" maxLength="256" />
        <input type="number" max="2045" name="year-released" id="year-released" />
        <button type="submit">Submit</button>
      </form>
      {movies.map((e,i)=><p key={i}>{e.title} {e.main_character} {e.year_released}</p>)}
    </>
  )
}