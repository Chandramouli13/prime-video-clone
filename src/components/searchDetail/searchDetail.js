import React, {useEffect, useState} from "react"
import "../movieDetail/movie.css"
import { useParams } from "react-router-dom"
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"
import Header from "../header/header"

const SearchMovieDetail = () => {

    const [searchDetails, setSearchDetails] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    const { id } = useParams()


    const getData = () => {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3363ff35f0a8eae1a0eca390593fa3ea&language=en-US`)
              .then(response => response.json())
              .then(data => setSearchDetails(data))
    }

    useEffect(() => {
        getData();
    },[])

    const handleTrailer  = (searchDetails) => {
        if (trailerUrl){
            setTrailerUrl("")
        } else {
            movieTrailer(searchDetails?.original_title || "").then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
            })
            .catch(()=> console.log('Trailer Unavailable'))
        } 
    }

    const opts = {
        height: "600",
        width : "100%",
        playerVars:{
            autoplay: 1,
            controls: 1,
            cc_load_policy: 0,
            fs: 0,
            iv_load_policy: 0,
            modestBranding: 0,
            rel: 0,
            showInfo: 0,
            origin: 'http://localhost:3000'
        }
    }
    

    return ( 
        <> 
        <Header/>
        <div className="movie">
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__detailLeftTop">
                        <div className="movie__name">{searchDetails ? searchDetails.title : ""}</div>
                        <div className="movie__tagline">{searchDetails ? searchDetails.tagline : ""}</div>
                        <span className="movie__year">{searchDetails ? searchDetails.release_date : ""}</span>
                        <span className="movie__runtime">{searchDetails ? searchDetails.runtime + " min": ""}</span>
                        <div className="movie__rating mt-1">
                            <i className="fa-brands fa-imdb icons"></i>
                            {searchDetails ? searchDetails.vote_average: ""} <i className="fas fa-star" />
                        </div>  
                    </div>
                    <div className="movie__info">
                        <div>{searchDetails ? searchDetails.overview : ""}</div>
                    </div>
                    <div className="mt-3">
                        <button type="button" key={searchDetails.id} onClick={() => handleTrailer(searchDetails)} className="btn btn-primary" style={{color: "white", padding: "10px", fontSize: "15px" }}><i className="fa-solid fa-play"></i> Play</button>    
                    </div>
                </div>
            </div>
            <div className="movie__intro">
                <img alt="poster" className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${searchDetails && searchDetails.backdrop_path}`} />
            </div>  
        </div> 
        {trailerUrl && <YouTube videoId ={trailerUrl} opts = {opts} className="youtube" />}
        </>
    )
}

export default SearchMovieDetail