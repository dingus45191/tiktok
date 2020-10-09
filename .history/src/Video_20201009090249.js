import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <video className="video__player" loop>
        <source
          src="https://www.youtube.com/watch?v=ptD0T-ZcF2M&t=4s"
          type="v"
        ></source>
      </video>

      {/* Video Footer */}
      {/* Video Sidebar */}
    </div>
  );
}

export default Video;
