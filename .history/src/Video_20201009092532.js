import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <video className="video__player" width="320" height="240" controls>
        <source src="./sj.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Footer */}
      {/* Video Sidebar */}
    </div>
  );
}

export default Video;
