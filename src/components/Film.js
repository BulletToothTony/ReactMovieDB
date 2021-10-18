import React from "react";
import {Link} from 'react-router-dom';

const Film = ({ Poster, Title, Type, Year, imdbID }) => {
  return (
    <article className="film">
      <div className="img-container">
        <img src={Poster} alt={Title}></img>
      </div>

      <div className="film-footer">
        <h3>{Title}</h3>
        {/* <h4>{Type}</h4> */}
        <h4>{Year}</h4>
        {/* <h4>{imdbID}</h4> */}
        <Link to={`/movie/${imdbID}`} className="btn btn-primary btn-details">
            Details
        </Link>
      </div>
    </article>
  );
};

export default Film;
