import React from "react";
import "./Socials.css";
import { InstagramEmbed } from "react-social-media-embed";
import { TikTokEmbed } from "react-social-media-embed";
import { TwitterEmbed } from "react-social-media-embed";
// import { YouTubeEmbed } from "react-social-media-embed";

function Socials() {
  return (
    <div className="socials-section">
      <div className="social-title">
        <p className="text-center">The Social Feed</p>
        <div className="feed-section">
          <div style={{}}>
            <InstagramEmbed
              url="https://www.instagram.com/legendof_ti/?hl=en"
              width={728}
            />
          </div>
          <div style={{}}>
            <TikTokEmbed
              url="https://www.tiktok.com/@legendof_ti/video/7124812252590640430"
              width={825}
            />
          </div>
          <div style={{}}>
            <TwitterEmbed
              url="https://twitter.com/LegendofTi/status/1711512775053480027"
              width={825}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
