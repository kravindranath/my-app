import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import RoutesIndex from './RoutesIndex';

var rootElem = document.getElementById('root');
var bodyElem = document.body;

function RenderBody() {

  const [mode, setMode] = useState('light');

  function toggleMode(){
      const currMode = (mode === 'light') ? 'dark' : 'light';
      setMode(currMode);
      bodyElem.setAttribute('class', currMode);
  }



  return (
    <React.StrictMode>
      <>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <RoutesIndex mode={mode} toggleMode={toggleMode} />
      </>
    </React.StrictMode>
  )
}

ReactDOM.render(<RenderBody />, rootElem);

