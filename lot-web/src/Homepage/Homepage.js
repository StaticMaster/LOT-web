import React from "react";
import "./Homepage.css";
import Typewriter from "typewriter-effect";
import timain from "../images/ti-background.jpg";

function Homepage() {
  return (
    <div>
      <div className="homepage-section">
        <img src={timain} className="img-fluid" alt="ti-pfp"></img>
        <p className="text-end">I am Legend of Ti</p>
        <Typewriter
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
      </div>
      </div>
    </div>
  );
}

export default Homepage;
