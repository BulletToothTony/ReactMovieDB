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
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="movie">Search for a Movie...</label>
        <input
          type="text"
          id="movie"
          ref={searchValue}
          onChange={searchFilm}
        ></input>
      </form>
    </div>
  );
};

export default SearchForm;
