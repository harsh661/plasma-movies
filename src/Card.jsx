import React from "react";
import { FaStar } from "react-icons/fa";

export default function Card(props) {
  const [movie, setMovie] = React.useState({});
  const [vote, setvote] = React.useState(false);
 
  React.useEffect(() => {
    fetch(`https://www.omdbapi.com/?t=${props.name}&apikey=979593d9`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [props.willShow]);

  function showVote(){
    setvote(prevVote => !prevVote)
  }

  console.log(movie)

  if(movie.Error !== "Movie not found"  && movie.Title !== undefined){
    return (
          <div className="card">
            <div className="poster">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="about">
              <span className="rating" onClick={showVote}>
                <FaStar style={{color:'#f7b900'}}/>
                <span>{movie.imdbRating}</span>
                <span id="votes">{vote ? `(${movie.imdbVotes})` : ''}</span>
              </span>
              <span style={{padding: '10px 0'}}>Language: {movie.Language}</span>
              <h2 className="title">{movie.Title} {`(${movie.Year})`}</h2>
              <h4>{movie.Genre}</h4>
              <p className="story">{movie.Plot}</p>
              <span className="date">
                  Released on: <b>{movie.Released}</b>
              </span>
            </div>
          </div>
    )
  }
}
