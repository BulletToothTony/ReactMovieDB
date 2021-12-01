import React, { useEffect, useState } from 'react';
import firebase from "../utils/firebase";


const Watchlistload = () => {
    const [moviesList, setMoviesList] = useState([])
    // remove movie
    const deleteMovie = (id) => {
        console.log(id)
        const movieRef = firebase.database().ref('MovieDB').child(id);
        movieRef.remove()
    }

    // watched movie
    const watchedMovie = (id) => {
        const movieRef = firebase.database().ref('MovieDB').child(id);
        movieRef.update({
            watched: !id.watched,
        })

    }

    useEffect(() => {
        const movieRef = firebase.database().ref("MovieDB")
        movieRef.on("value", (snapshot) => {
            console.log(snapshot.val());
            const movies = snapshot.val();
            // setMoviesList(movies)
            const movielist = [];
            for (let id in movies) {
                // movielist.push({id, ...movies})
                // movielist.push([movies])
                movielist.push({...movies[id], id} )
                setMoviesList(movielist)
                console.log(moviesList)

            }
        })
    },[])

    return (
        <div className="watchlistDiv">
            {moviesList.map((movie) => {
                console.log(movie)
                return (
                    <div key={movie.id} className="singledWatchDiv">
                        <h4 className={movie.watched ? `complete` : ``}>{movie.name}</h4>
                {/* <h3>{movie.id}</h3> */}
                {/* <h3>{movie.name}</h3> */}
                <img src={movie.img} alt={movie.name}></img>
                <div className="buttonsWatchlist">
                <button onClick={() => watchedMovie(movie.id)} className="buttonWatch">Watched</button>
                <button onClick={() => deleteMovie(movie.id)} className="buttonWatch">Remove</button>
                </div>
                </div>
            )})}
        </div>
    );
};

export default Watchlistload;