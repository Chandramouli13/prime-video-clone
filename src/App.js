import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import MovieList from "./components/movieList/movieList";
import Movie from "./components/movieDetail/movie";
import WelcomePage from "./components/welcomePage/welcome";
import Membership from "./components/payment/membership";
import Login from "./components/login/login";
import Register from "./components/login/register";
import Movies from "./components/movies/movies";
import TvShows from "./components/movies/TvShows";
import Search from "./components/search/search";
import SearchMovieDetail from "./components/searchDetail/searchDetail";
import { AuthProvider } from "./components/contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<WelcomePage />}></Route>
            <Route path="/membership" element={<Membership />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="movies/:type" element={<MovieList />}></Route>
            <Route path="movies//:id" element={<Movie />}></Route>
            <Route path="/Movies" element={<Movies />}></Route>
            <Route path="/TvShows" element={<TvShows />}></Route>
            <Route path="/Search" element={<Search />}></Route>
            <Route path="movie/:id" element={<SearchMovieDetail />}></Route>
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
