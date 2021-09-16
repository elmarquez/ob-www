import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="bg-white">
      <Routes />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
