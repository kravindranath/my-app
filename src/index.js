import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import RoutesIndex from './RoutesIndex';

var rootElem = document.getElementById('root');
var bodyElem = document.body;
bodyElem.setAttribute('class', 'light');

function RenderBody() {

  const [theme, setMode] = useState({ mode: 'light' });

  function toggleMode(){
      const currMode = (theme.mode === 'light') ? 'dark' : 'light';
      setMode({ mode: currMode });
      bodyElem.setAttribute('class', currMode);
  }

  const [currNav, setNavToggle] = useState({nav: 'hide'});

  function navToggle(){
      const currNavSt = (currNav.nav === 'show') ? 'hide' : 'show';
      setNavToggle({nav: currNavSt});
  }

  return (
    <React.StrictMode>
      <>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <RoutesIndex mode={theme.mode} toggleMode={toggleMode} showHideNav={currNav.nav}
navToggle={navToggle} />
      </>
    </React.StrictMode>
  )
}

ReactDOM.render(<RenderBody />, rootElem);

