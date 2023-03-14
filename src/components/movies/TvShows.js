import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import './movies.css'
import Header from "../header/header"

const TvShows = () => {

    const [seriesList, setSeriesList] = useState([])
    const [seriesNewList, setSeriesNewList] = useState([])  

    const fetchData = () => {
        return fetch("https://nodeapi-j1zy.onrender.com/movies/2")
              .then((response) => response.json())
              .then((data) => setSeriesList(data));
    }

    useEffect(() => {
        fetchData();
    },[])

    const fetchNewData = () => {
        return fetch("https://nodeapi-j1zy.onrender.com/movies/3")
              .then((response) => response.json())
              .then((data) => setSeriesNewList(data));
    }

    useEffect(() => {
        fetchNewData();
    },[])


    return (
        <>
        <Header/>
        <div className="Movies" style={{marginTop:"100px", marginBottom:"100px"}}>
            <h5 className="list__title">{("Amazon Original series")}</h5>
            <div className="list__cards container-fluid p-4">
                <>
                    {seriesList.map((movie) => (
                        <Link to={`/movies//${movie.id}`} key={movie.id} >
                            <div className="image_container">
                                <img alt="img" src={movie.image}></img>
                            </div>
                        </Link>    
                    ))}
                </>
            </div>
            <div className="list__cards container-fluid p-4">
                <>
                    {seriesNewList.map((movie) => (
                        <Link to={`/movies//${movie.id}`} key={movie.id} >
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

export default TvShows;

