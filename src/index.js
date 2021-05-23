import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import useWindowSize from "../node_modules/util/useWindowSize";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

/*
ReactDOM.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Title />
  </React.StrictMode>,
  document.getElementsByClassName('Title')
);
reportWebVitals();
*/