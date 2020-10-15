import React from "react";
import "./App.css";
import Video from "./Video";
import Vid from "./sj.mp4";
import Apple from "./apple-marketing.mp4";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
            url={Apple}
            channel={`Mub45191`}
            song={`The React Song`}
            description={'My TikTok'}
            likes={1233}
            messages={ 4563 }
            shares={7893}
        />
        <Video
          url={Vid}
          channel={`Mub45191`}
            song={`The React Song`}
            description={'My TikTok'}
            likes={123}
            messages={ 456 }
            shares={789}
        />
      </div>
    </div>
  );
}

export default App;
