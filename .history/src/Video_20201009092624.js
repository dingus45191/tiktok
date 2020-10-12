import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <video className="video__player" con>
        <source src="./sj.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Footer */}
      {/* Video Sidebar */}
    </div>
  );
}

export default Video;
