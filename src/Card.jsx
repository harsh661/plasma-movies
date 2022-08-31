import React from "react";
import { FaStar } from "react-icons/fa";

export default function Card(props) {
  const [movie, setMovie] = React.useState({});
 
  React.useEffect(() => {
    fetch(`https://www.omdbapi.com/?t=${props.name}&apikey=979593d9`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [props.willShow]);

  return (
    <>
      {movie.Error !== "Movie not found" && movie.Title !== undefined ?
        <div className="card">
          <div className="poster">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="about">
            <span className="rating">
              <FaStar style={{color:'#f7b900'}}/>
              <span>{movie.imdbRating}</span>
            </span>
            <span style={{padding: '10px 0'}}>Language: {movie.Language}</span>
            <h2 className="title">{movie.Title} {`(${movie.Year})`}</h2>
            <h4>{movie.Genre}</h4>
            <p className="story">{movie.Plot}</p>
            <span className="date">
                Released on: <b>{movie.Released}</b>
            </span>
          </div>
        </div>: <h1 className="error-msg">{props.msg}</h1>
      }
      
    </>
  );
}
