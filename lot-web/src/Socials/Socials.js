import React from "react";
import "./Socials.css";
import { InstagramEmbed } from "react-social-media-embed";
import { TikTokEmbed } from "react-social-media-embed";
import { TwitterEmbed } from "react-social-media-embed";
import { YouTubeEmbed } from "react-social-media-embed";

function Socials() {
  return (
    <div className="socials-section">
      <div className="social-title">
        <p className="text-center" id="Social">The Social Feed</p>
        <div className="d-flex flex-column grid gap-3 align-items-center socials">
          <div className="ig-embed">
            <InstagramEmbed
              url="https://www.instagram.com/legendof_ti/?hl=en"
              width={394}
            />
          </div>
          <div className="yt-embed">
            <YouTubeEmbed
              url="https://www.youtube.com/watch?v=Lxnj0jdcvng&t=1146s&ab_channel=LegendofTi&autoplay=1"
              width={390}
              height={220}
            />
          </div>
          <div className="tiktok-embed">
            <TikTokEmbed
              url="https://www.tiktok.com/@legendof_ti/video/7124812252590640430"
              width={375}
              height={655}
            />
          </div>
          <div className="twitter-embed">
            <TwitterEmbed
              url="https://x.com/legendofti/status/1731768205230964791?s=51&t=ErdMRaY545xTydjCHZ28mw"
              width={393}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
