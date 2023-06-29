import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from './router';
import Banner from './components/Banner';
import Footer from './components/Footer';

import './index.css';
import reportWebVitals from './reportWebVitals';
import 'material-icons/iconfont/material-icons.css';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <>
        <Banner />
        <AppRouter />
        <Footer />
      </>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
