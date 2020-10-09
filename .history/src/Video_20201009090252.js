import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <video className="video__player" loop>
        <source
          src="https://www.youtube.com/watch?v=ptD0T-ZcF2M&t=4s"
          type="video/mp4"
        ></source>
      </video>

      {/* Video Footer */}
      {/* Video Sidebar */}
    </div>
  );
}

export default Video;
