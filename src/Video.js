import React, {useRef, useState} from "react";
import "./Video.css";
import vid from "./sj.mp4";

function Video() {
    const[playing, setPlaying]= useState(false)
    const videoRef= useRef(null);

    const handleVideoPress= ()=>{

        if(playing){
            videoRef.current.pause();
            setPlaying(false)

        }
        else {
            videoRef.current.play();
            setPlaying(true)
        }
        //if video is playing
        //stop.. it

        //otherwise play it
    }

  return (
    <div className="video">
      <video className="video__player">
        <source
            onClick={handleVideoPress}
            src={vid}
            type="video/mp4"
            ref={videoRef}
        />

      </video>

      {/* Video Footer */}
      {/* Video Sidebar */}
    </div>
  );
}

export default Video;
