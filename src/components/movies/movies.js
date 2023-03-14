import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom"
import './movies.css'
import Header from "../header/header";

const Movies = () => {

    const [movieList, setMovieList] = useState([])   

    const fetchData = () => {
        return fetch("https://nodeapi-j1zy.onrender.com/movies/1")
              .then((response) => response.json())
              .then((data) => setMovieList(data));
    }

    useEffect(() => {
        fetchData();
    },[])

    return (
        <>
        <Header/>
        <div className="Movies" style={{marginTop:"100px", marginBottom:"100px"}}>
            <h5 className="list__title">{("Recommended movies")}</h5>
            <div className="list__cards container-fluid p-4">
                <>
                    {movieList.slice(0,11).map((movie) => (
                        <Link to={`/movies//${movie.id}`} key={movie.id}>
                            <div className="image_container">
                                <img alt="img" src={movie.image}></img>
                            </div>
                        </Link>    
                    ))}
                </>
            </div>
            <div className="list__cards container-fluid p-4">
                <>
                    {movieList.slice(12,24).map((movie) => (
                        <Link to={`/movies//${movie.id}`} key={movie.id}>
                            <div className="image_container">
                                <img alt="img" src={movie.image}></img>
                            </div>
                        </Link>    
                    ))}
                </>
            </div>
        </div>
        </>
    )
}

export default Movies;

