import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import firebase from "../utils/firebase";

const SingleMovie = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);

   const getMovie = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=30b97e2a`
      );
      const data = await response.json();
      setMovie(data);
      console.log(data);
      if (data) {
        setMovie(data);
      } else {
        setMovie(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!movie) {
    return <h2 className="section-title">no movie to display</h2>;
  }

  const createMovieID = (id) => {
    console.log(id);
    const movieRef = firebase.database().ref("MovieDB");
    const movieNow = {
      name: movie.Title,
      id: id,
      img: movie.Poster,
      watched: false,
    }
    movieRef.push(movieNow)
  };

  return (
    <section className="section film-section">
      <h2 className="section-title">
        {movie.Title}
        <br />
        <Link to="/" className="btn btn-primary">
          Back Home
        </Link>
      </h2>

      <div className="flexDiv">
        <div className="movie">
          <img src={movie.Poster} alt={movie.Title} />
          <div className="movie-info">
            <p>
              <span className="movie-data">Awards : </span>
              {movie.Awards}
            </p>
            <p>
              <span className="movie-data">Box Office : </span>
              {movie.BoxOffice}
            </p>
            <p>
              <span className="movie-data">Director : </span>
              {movie.Director}
            </p>
            <p>
              <span className="movie-data">Actors : </span>
              {movie.Actors}
            </p>
            <p>
              <span className="movie-data">Plot : </span>
              {movie.Plot}...
            </p>
            <p>
              <span className="movie-data">IMDB Rating : </span>
              {movie.imdbRating}
            </p>
            <p>
              <span className="movie-data">IMDB Votes : </span>
              {movie.imdbVotes}
            </p>
            <p>
              <span className="movie-data">Released : </span>
              {movie.Released}
            </p>
            <p>
              <span className="movie-data">Runtime : </span>
              {movie.Runtime}
            </p>
            <p>
              <span className="movie-data">Year : </span>
              {movie.Year}
            </p>
            {/* We want to pass in ID we used to firebase DB */}
            <button onClick={() => createMovieID(id)}>
              Add Movie to Watch List
            </button>
          </div>
        </div>
      </div>
      {/* box office, director, actors, plot, rated, imdbRating, imdbVotes, Released, Runtime, Year  */}
    </section>
  );
};

export default SingleMovie;
