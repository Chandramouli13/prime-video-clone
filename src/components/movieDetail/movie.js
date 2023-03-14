import React, {useEffect, useState} from "react"
import "./movie.css"
import { useParams } from "react-router-dom"
import Header from '../../components/header/header'
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

const Movie = () => {

    const [movieDetail, setMovie] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    const { id } = useParams()

    const fetchDetailData = () => {
        return fetch(`https://nodeapi-j1zy.onrender.com/movies//${id}?`)
              .then((response) => response.json())
              .then((data) => setMovie(data));
    }

    useEffect(() => {
        // eslint-disable-next-line 
        fetchDetailData();
    })


    // Some youtube Trailers will not play (Trailer Unavailable) because [Youtube uses content id System to automatically remove Copyrighted Content.]

    const handleTrailer  = (movie) => {
        if (trailerUrl){
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.name || "").then((url) => {
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
            {
                movieDetail.map(movie => (
                    <> 
                        <div className="movie">
                            <div className="movie__detail">
                                <div className="movie__detailLeft">
                                    <div className="movie__detailLeftTop">
                                        <div className="movie__name">{movie ? movie.name : ""}</div>
                                        <span className="movie__year">{movie ? movie.year : ""}</span>
                                        <span className="movie__runtime">{movie ? movie.Duration : ""}</span>
                                        <span className="movie__year">{movie ? movie.Age : ""}</span>
                                        <div className="movie__rating mt-1">
                                            <i className="fa-brands fa-imdb icons"></i>
                                            {movie ? movie.IMDb: ""} <i className="fas fa-star" />
                                        </div>  
                                    </div>
                                    <div className="movie__info">
                                        <div>{movie ? movie.info : ""}</div>
                                    </div>
                                    <div className="movie__director">Directors <i className="fa-solid fa-arrow-right"></i> {movie ? movie.director : ""}</div>
                                    <div className="movie__actor">Actors <i className="fa-solid fa-arrow-right"></i> {movie ? movie.Actors : ""}</div>  
                                    <div className="mt-3">
                                        <button type="button" key={movie.id} onClick={() => handleTrailer(movie)} className="btn btn-primary" style={{color: "white", padding: "10px", fontSize: "15px" }}><i className="fa-solid fa-play"></i> Play</button>    
                                    </div>
                                </div>
                            </div>  
                            <div className="movie__intro">
                                <img alt="poster" className="movie__backdrop" src={`${movie && movie.image}`} />
                            </div>
                        </div> 
                        {trailerUrl && <YouTube videoId ={trailerUrl} opts = {opts} className="youtube" />}
                    </>
                ))
            }
        </>        
    )
}

export default Movie