import React from "react";
import "./features.css";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <>
      <div className="welcome">
        <div className="container m-2  ">
          <h1>Welcome </h1>
          <br />
          <h4>
            Join Prime to watch the latest movies, TV shows and award-winning
            Amazon Originals
          </h4>
          <br />
          <Link to="/membership">
            <button className="btn btn-primary btn-block">
              Start 30-day free trial
            </button>
          </Link>
          <p>with select credit, debit card, or UPI ID</p>
        </div>
      </div>
      <div className="Rent">
        <div className="container1 m-2">
          <h1>Movie rentals</h1>
          <br />
          <h4>Early Access to new movies, before digital subscription</h4>
          <br />
          <br />
          <Link to="/membership">
            <button className="btn btn-primary btn-block1">Rent now</button>
          </Link>
        </div>
      </div>
      <div className="fireStick">
        <div className="container2 m-2">
          <h1 className="">Fire TV Stick</h1>
          <br />
          <h4>
            The biggest movies and TV shows are always better on a big screen.
            Simply plug in your Amazon Fire TV Stick and stream on any HDTV.
            Press the voice button on the remote and say the name of the title
            you want to watch to find it in seconds.
          </h4>
          <br />
          <br />
          <Link
            target="_blank"
            to="https://www.amazon.in/Fire-TV-Stick-Alexa-Voice-Remote-3rd-Gen/dp/B08R6QR863?tag=firetvdevicesinbrand-21&ascsubtag=_k_Cj0KCQiApKagBhC1ARIsAFc7Mc7xT7IQoajzUqF680-hE3l0rzWafkNwslgkkbXJ4OovlwHiHdhIURoaArXOEALw_wcB_k_&gclid=Cj0KCQiApKagBhC1ARIsAFc7Mc7xT7IQoajzUqF680-hE3l0rzWafkNwslgkkbXJ4OovlwHiHdhIURoaArXOEALw_wcB"
          >
            <button className="btn btn-primary btn-block1">Get started</button>
          </Link>
        </div>
      </div>
      <div className="family">
        <div className="container3 m-2">
          <h1>Family Friendly</h1>
          <br />
          <h4>
            With easy to use Parental Controls and a dedicated kids page, enjoy
            secure, ad-free kids entertainment. Kids can enjoy popular TV shows
            like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
          </h4>
          <br />
          <br />
          <Link to="/register">
            <button className="btn btn-primary btn-block1">Get started</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Features;
