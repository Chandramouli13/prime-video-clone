import React from "react";
import { Link } from "react-router-dom";

function Membership() {
  return (
    <div className="container-fluid text-center">
      <img
        src="https://i.ibb.co/j8KrdMZ/youth-offer-prime.jpg"
        alt=""
        style={{ width: "100%" }}
      />
      <div
        className="m-3 img-thumbnail"
        style={{ fontSize: "15px", color: "black", fontWeight: "600" }}
      >
        <div className="m-3">
          Start your prime subscription to enjoy exclusive benefits
        </div>
        <Link to="/register">
          <button
            type="submit"
            style={{
              background: "#f0c14b",
              padding: "2px 20px",
              borderColor: "#a88734 #9c7e31 #846a29",
              fontWeight: "600",
            }}
          >
            Start your 30-day <span style={{ color: "green" }}>FREE</span> trial
          </button>
        </Link>
      </div>
      <img
        src="https://i.ibb.co/2tLGysq/Prime-Membership.webp"
        alt=""
        style={{ width: "100%" }}
      />
      <img
        src="https://i.ibb.co/GkRX052/prime-plan.jpg"
        alt=""
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default Membership;
