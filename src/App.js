import './App.css';
import SearchIcon from './search.svg';
import { useEffect, useState } from "react";
import MovieCard from './MovieCard';

/*
function App() {
  return (
    <h1>App</h1>  
  );
}
*/
//1a1acad

const API_URL = 'http://www.omdbapi.com?apikey=1a1acad';

const App = () => {
  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);//notice the single quote here, it is the tilde key
    const data = await response.json();
    //console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() =>{
   searchMovies('Superman') ;
  },[]);

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
/*
  const movie1 = {
    "Title": "Superman Returns",
    "Year": "2006",
    "imdbID": "tt0348150",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDUzZGRhNzktYTZkMC00YWFiLTljMDEtMTk2OWJhYzAyYmY2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
  };
*/

  return (
    <div className='app'>
      <h1>MovieLand</h1> 
      <div className='search'>
        <input 
        placeholder='Search For movies' 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src = {SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div> 
      {
        movies?.length > 0
        ? (
          <div className='container'>
            {/*<MovieCard movie1={movies}/>  --Commented out*/}
            {movies.map((movie)=> (
              <MovieCard movie = {movie}/>
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h1>No Movies Found</h1>
          </div>

        )
      }
    </div>
  );
}
export default App;
