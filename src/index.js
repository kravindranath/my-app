import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppNew from './AppNew';

ReactDOM.render(
  <React.StrictMode>
    <>
      <AppNew />
        <div className="separator"></div>
      <App />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

