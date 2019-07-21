import React from 'react';
import './App.css';
import ScatterExample from './barExample.js'
import CompareExample from './CompareGraph.js'
import ImgMediaCard from "./cardWithSnackBar.js"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello world! This is pegasus - hello there this is newer
https://www.stickpng.com/img/icons-logos-emojis/pins/red-map-pin
        </a>
  </header> */}
      <ImgMediaCard />
      <ScatterExample />
      <CompareExample />
    </div>
  );
}

export default App;
