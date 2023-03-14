import React from 'react'
import './result.css'
import {Link} from "react-router-dom"

export default function Result(props) {
    const movies = props.movies.map(
        (item,index) => {
            return <Box key={index} image={item.poster_path} id={item.id} />
        }
    )
    return (
        <div className='Box'>
            {movies}
        </div>
    )
}

const Box = (props) => {

    const IMGPATH = "https://image.tmdb.org/t/p/w1280";

    return (
        <>
        <div className="list-cards container-fluid p-2">
            <Link to={`/movie/${props.id}`} style={{textDecoration:"none", color:"white"}}>
                <div className="image-container mt-5">
                    <img src={IMGPATH + props.image} alt=""/>
                </div>
            </Link>      
        </div>
        </>
    )
}































// import React, {useState} from "react"
// import axios from 'axios'
// import '../movies/movies.css'
// import {Link} from "react-router-dom"

// const Input = () => {
    
//     const [text, setText] = useState("");
//     const [movie, setMovie] = useState([]);
    
//     const changeMovie = (event) => {
//         // console.log(event)
//         setText(event.target.value);
//     }

//     const IMGPATH = "https://image.tmdb.org/t/p/w1280";

//     const getMovie = (e) => {
//         e.preventDefault();

//         axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3363ff35f0a8eae1a0eca390593fa3ea&language=en-US&query=${text}&page=1&include_adult=false`)
//             .then((response) => {
//                 console.log(response)
//                 setMovie(response.data.results)
//             })
//     }

//     return (
//         <>
//         <form className="d-flex" onSubmit={getMovie}>
//             <input
//                 style={{fontSize:"15px", backgroundColor:"transparent", color:"white"}}
//                 type="text"
//                 placeholder="Search..."
//                 aria-label="search"
//                 value={text}
//                 onChange = {changeMovie}
//             >
//             </input>
//         </form>

//         <div className="list__cards container-fluid">
//                 {movie.map((value) => (
//                     <Link to={`/movies//${movie.id}`} key={movie.id}>
//                     <div className="image_container">
//                         <img alt="img" src={IMGPATH +  value.poster_path}></img>
//                     </div>
//                     </Link>
//                 ))}   
//         </div>
            
//         </>
//     )
// }

// export default Input;



// // Search api is from https://developers.themoviedb.org/3/search/search-movies

