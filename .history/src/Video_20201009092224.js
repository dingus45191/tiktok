import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <video className="video__player" loop>
        <source src="./sj.mp4" type="video/mp4"></source>
      </video>

      {/* Video Footer */}
      {/* Video Sidebar */}
    </div>
  );
}

export default Video;
