import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
      <h1>{`Let's build a FULL STACK MERN tiktok clone`}</h1>

      <div class="app__videos">

      
        <Video/>
        
      </div>
      
    </div>
  );
}

export default App;
