import React, { useRef, useContext, useEffect } from "react";
import { AppContext } from "../context";
const SearchForm = () => {
  const data = useContext(AppContext);
  const searchValue = useRef("");

  useEffect(() => {
      searchValue.current.focus();
  }, [])

  const searchFilm = () => {
    data.setSearchTerm(searchValue.current.value);
  };

  const formSubmit = (e) => {
      e.preventDefault();
  }
  return (
    <div className="search">
      <form onSubmit={formSubmit} className="search-form">
      <div className="search-div">
        <label htmlFor="movie">Search for a Movie...</label>
        <br></br>
        <input
          type="text"
          id="movie"
          ref={searchValue}
          onChange={searchFilm}
        ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
