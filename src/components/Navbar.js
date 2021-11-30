import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import firebase from "../utils/firebase";

const Navbar = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const movieRef = firebase.database().ref("MovieDB");
        movieRef.on('value', (snapshot) => {
            // console.log(snapshot.val());
            // console.log(Object.keys(snapshot).length)
            const movies = snapshot.val();
            const movieList = [];
            for (let id in movies) {
                movieList.push(movies[id]);
            }
            setMovieList(movieList);


        });

    }, [])


    return (
        <nav className="navbar">
            <div className="nav-centre">
                <Link to="/">
                    <h2>MovieDB</h2>
                </Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/watchlist">
                        Watchlist: {movieList.length}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;