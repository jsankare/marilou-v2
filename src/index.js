import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from './router';
import Banner from './components/Banner'

import './index.css';
import reportWebVitals from './reportWebVitals';
import 'material-icons/iconfont/material-icons.css';

ReactDOM.render(
  <>
  <Banner />
  <Router>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Router>
  </>,
  document.getElementById('root')
);

reportWebVitals();
