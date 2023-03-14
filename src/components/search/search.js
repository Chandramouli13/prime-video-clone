import Result from "./Result";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../header/header";

const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3363ff35f0a8eae1a0eca390593fa3ea&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=3363ff35f0a8eae1a0eca390593fa3ea&query=";


const Search = () => {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const changeTheSearch = (event) => {
    // console.log(event.target.value);
    setSearch(event.target.value);
  }

  const getAllMovies = () => {
    axios.get(API_URL)
      .then(
        (response) => {
          console.log(response.data.results)
          setMovies(response.data.results);
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }

  const getSearchedMovies = () => {
    // console.log(SEARCH_API + search)
    axios.get(SEARCH_API + search)
      .then(
        (response) => {
          console.log(response.data.results)
          setMovies(response.data.results);
        }
      )
      .catch(
        (error) => { 
          console.log(error);
        }
      )
  }

  useEffect(
    () => {
      setMovies([]);
      // console.log("Hello");
      if (search === "") {
        getAllMovies();
      } else {
        getSearchedMovies();
      }
    },
    [search]
  )
  

  return (
    <>
    <Header />

    <form className="container-fluid" style={{marginTop:"130px"}}>
            <input
                style={{fontSize:"25px", backgroundColor:"transparent", color:"white", marginLeft:"20px"}}
                type="search"
                placeholder="Search..."
                value={search} 
                onChange={changeTheSearch}
            />
            {
              <Result movies={movies} />
            }
    </form>
    </>
  );
}

export default Search;