import React from "react"
import Movies from "../movies/movies"
import TvShows from "../movies/TvShows"

const MovieList = () => {

    return (
        <>
            <div className="movies-list" style={{marginTop:"-50px"}}>
                <Movies />
            </div>
            <div className="movies-list" style={{marginTop:"-50px", marginBottom:"-30px"}}>
                <TvShows />
            </div>
        </>
    )
    
}

export default MovieList;