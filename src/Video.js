import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <video className="video__player">
        <source src="./sj.mp4" type="video/mp4"/>

      </video>

      {/* Video Footer */}
      {/* Video Sidebar */}
    </div>
  );
}

export default Video;
