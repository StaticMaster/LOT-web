import React from "react";
import "./Homepage.css";
import Typewriter from "typewriter-effect";
import tibg from "../images/ti-background-vid.mp4";
import timain from "../images/new-pfp.jpg";
import ghost from "../images/ghost-logo.png";
import gameradvantage from "../images/gamer-advantage.png";
import altcustoms from "../images/altcustoms.png";
import Socials from "../Socials/Socials";
import About from "../About/About";

function Homepage() {
  return (
    <div>
      <div className="bg-wrapper">
        <video autoPlay loop muted className="bg-video  ">
          <source src={tibg} type="video/mp4"></source>
        </video>
        <div className="homepage-section">
          <div className="img-container">
            <img src={timain} className="img-fluid" alt="ti-pfp" />
          </div>
          <div className="text-end intro-text">
            <p>I am Legend of Ti</p>
            <Typewriter
              options={{
                strings: ["Creator", "Gamer", "Bodybuilder"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 500,
              }}
            />
          </div>
          <div className="sponsor-section">
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
          <Socials />
          <About />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
