import React from "react";
import "./Homepage.css";
import Typewriter from "typewriter-effect";
import tibg from "../images/ti-background-vid.mp4";
import timain from "../images/ti-background.jpg";
import ghost from "../images/ghost-logo.png";
import gameradvantage from "../images/gamer-advantage.png";
import altcustoms from "../images/altcustoms.png";

function Homepage() {
  return (
    <div>
      <div className="bg-wrapper">
        <video autoPlay loop muted className="bg-video">
        <h1>Random Text</h1>
          <source src={tibg} type="video/mp4"></source>
        </video>
        <div className="homepage-section">
          <img src={timain} className="img-fluid" alt="ti-pfp" />
          <p className="text-end">I am Legend of Ti</p>
          <Typewriter
            className="text-end"
            options={{
              strings: ["Creator", "Gamer", "Bodybuilder"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 500,
            }}
          />
          <div className="sponsor-section">
            <p className="text-center">Sponsors</p>
            <div className="container text-center">
              <div className="row align-items-center">
                <div className="col">
                  <a href="https://www.ghostlifestyle.com/?ref=Ti">
                    <img
                      src={ghost}
                      className="social-image"
                      alt="ghost-logo"
                      width="300"
                    />
                  </a>
                </div>
                <div className="col">
                  <a href="https://gameradvantage.com/?ref=Ti">
                    <img
                      src={gameradvantage}
                      className="social-image"
                      alt="gamer-advantage"
                      width="350"
                    />
                  </a>
                </div>
                <div className="col">
                  <a href="https://altcustoms.com/?ref=Ti">
                    <img
                      src={altcustoms}
                      className="social-image"
                      alt="alt-customs"
                      width="300"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
