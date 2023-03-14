import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";
import Preview from "../preview/preview";
import Header from "../header/header";



const Home = () => {

    const [ posterMovies, setPosterMovies ] = useState([])
    
    const fetchData = () => {
            return fetch("https://nodeapi-j1zy.onrender.com/movies/1")
              .then((response) => response.json())
              .then((data) => setPosterMovies(data));
    }

    useEffect(() => {
        fetchData();
    },[])

    return (
        <>  
             <Header/>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        posterMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movies//${movie.id}`} key={movie.id}>
                                <div className="posterImage">
                                    <img alt="poster" src={`${movie && movie.image}`} />
                                </div>
                                {/* <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.name: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.year : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.IMDb :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.info : ""}</div>
                                </div> */}
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList />
                <Preview />
            </div>
        </>
    )
}

export default Home