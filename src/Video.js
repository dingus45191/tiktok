import React, {useRef, useState} from "react";
import "./Video.css";
import vid from "./sj.mp4";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video() {
    const[playing,setPlaying]= useState(false);
    const videoRef= useRef(null);

    const handleVideoPress= () => {

        if(playing){
            videoRef.current.pause();
            setPlaying(false);

        }
        else {
            videoRef.current.play();
            setPlaying(true);
        }

    }

  return (
    <div className="video">
      <video
          className="video__player"
          onClick={handleVideoPress}
          loop
          ref={videoRef}
      >
        <source
            src={vid}
            type="video/mp4"
        />

      </video>

     <VideoFooter/>
     <VideoSidebar/>

    </div>
  );
}

export default Video;
