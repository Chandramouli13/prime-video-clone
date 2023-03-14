import React from "react";
import {Link} from 'react-router-dom';
import './welcomeNav.css'

const WelcomeNav = () => {
    return (
        <>
           <div className="header">
            <div className="headerLeft">
                <Link to="#"><img alt="logo" className="header__icon" src="https://i.ibb.co/X4bQBcf/primeblue-logo.png" /></Link>
            </div>
            <div className="headerRight">
                {/* <Link to="/"><img alt="logo" className="search__icon" src="https://i.ibb.co/Zc7wV9T/search-icon.png" /></Link> */}
                <li className="navbar-nav dropdown">
                    <Link to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        <img alt="user-icon" src="https://i.ibb.co/h8PPHHH/profile-img.png" height="30px" width="30px" className="ms-2"/></Link> 
                    <ul className="dropdown-menu dropdown-menu-dark">
                        <li className="dropdown-item"><Link to="/login" className="nav-link">Sign In</Link></li>
                        <li className="dropdown-item"><Link to="/register" className="nav-link">Sign Up </Link></li>
                    </ul>
                </li>
            </div>
        </div>
        </>
    )
}

export default WelcomeNav;