import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import broweser router to be able to use it: https://youtu.be/Re8n-hmkWlY
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root'));
  registerServiceWorker();
