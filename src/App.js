import React from "react";
import "./App.css";
import Video from "./Video";
import Vid from"./sj.mp4";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
            url={Vid}
            channel={`Mub45191`}
            song={`The React Song`}
            description={'My TikTok'}
            likes={123}
            messages={ 456 }
            shares={789}
        />
        <Video
            url={Vid}
        />
      </div>
    </div>
  );
}

export default App;
