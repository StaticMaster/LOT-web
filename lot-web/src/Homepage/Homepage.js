import React from "react";
import "./Homepage.css";
import timain from "../images/ti-background.jpg";

function Homepage() {
  return (
    <div className="homepage-section">
      <img src={timain} className="img-fluid" alt="ti-pfp"></img>
      <p className="text-start">I am Legend of Ti</p>
    </div>
  );
}

export default Homepage;
