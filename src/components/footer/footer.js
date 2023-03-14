import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <img alt="logo" src="https://i.ibb.co/X4bQBcf/primeblue-logo.png" />
          <div>
            <p className="foot-text">Chandramouli Developer &hearts;</p>
            <p className="foot-text">Connect With Me :</p>
            <Link
              to="https://www.linkedin.com/in/chandra-mouli-082a82178/"
              target="_blank"
              style={{ textDecoration: "none", color: "#00A8E1" }}
            >
              <i className="bi bi-linkedin m-3"></i>
            </Link>
            <Link
              to="https://github.com/Chandramouli13"
              target="_blank"
              style={{ textDecoration: "none", color: "#00A8E1" }}
            >
              <i className="bi bi-github"></i>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
