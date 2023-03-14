import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
    const { currentUser } = useAuth();
    return (
        <>
        <div className="header">
            <div className="headerLeft">
                <Link to="#"><img alt="logo" className="header__icon" src="https://i.ibb.co/0BgxNn1/prime-logo.png" /></Link>
                <Link to="/Home" style={{textDecoration: "none"}}><span className="head">Home</span></Link>
                <Link to="/Movies" style={{textDecoration: "none"}}><span className="head">Movies</span></Link>
                <Link to="/TvShows" style={{textDecoration: "none"}}><span className="head">Shows</span></Link>
            </div>
            <div className="headerRight">
                <Link to="/Search"><img alt="logo" className="search__icon" src="https://i.ibb.co/Zc7wV9T/search-icon.png" /></Link>
                <li className="navbar-nav dropdown">
                    <Link to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        <img alt="user" src="https://i.ibb.co/h8PPHHH/profile-img.png" height="30px" width="30px" className="ms-3 user__icon"/></Link> 
                    <ul className="dropdown-menu dropdown-menu-dark">
                        <li className="dropdown-item"><Link to="" className="nav-link">{currentUser && currentUser.email}</Link></li>
                        <li className="dropdown-item"><Link to="/" className="nav-link">Sign Out</Link></li>
                    </ul>
                </li>
            </div>
        </div>
        </>
    )
}

export default Header