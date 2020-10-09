import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        src="https://youtu.be/g8yGxDMyGiE"
      ></video>

      {/* Video Footer */}
      {/* Video Sidebar */}
    </div>
  );
}

export default Video;
