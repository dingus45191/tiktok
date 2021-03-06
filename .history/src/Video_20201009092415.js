import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <video className="video__player" width="320" height="240" controls>
        <source src="movie.mp4" type="video/mp4">
        <source src="movie.ogg" type="video/ogg">
         Your browser does not support the video tag.
   </video>

      {/* Video Footer */}
      {/* Video Sidebar */}
    </div>
  );
}

export default Video;
