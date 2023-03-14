import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    // firebase login.......
    if (!email) alert("Please fill the details");
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully signed a user with email and password
        navigate("/Home");
      })
      //say, for any reason there was an error
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          alt="logo"
          className="login_logo"
          src="https://i.ibb.co/X4bQBcf/primeblue-logo.png"
        />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the Amazon-Prime clone Conditions of Use &
          Sale.
          <Link
            to="https://www.primevideo.com/help/ref=av_auth_te?nodeId=202064890"
            style={{ textDecoration: "none", color: "#00A8E1" }}
          >
            Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </Link>
        </p>
        <Link to="/register">
          <button className="login_registerButton">
            Create your Amazon Account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
