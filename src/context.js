import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.omdbapi.com/?s=fight%20club&apikey=30b97e2a";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Wars");
  const [films, setFilms] = useState([]);

  const fetchFilms = useCallback( async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=30b97e2a`
      );
      const data = await response.json();
    //   console.log(data)
      const { Search } = data;
    //   console.log(Search)
      if (Search) {
        setFilms(Search);
      } else {
        setFilms([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  },[searchTerm]);

  useEffect(() => {
    fetchFilms();
  }, [searchTerm, fetchFilms]);

  return <AppContext.Provider value={{loading, setLoading, searchTerm, setSearchTerm, films, setFilms}}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
