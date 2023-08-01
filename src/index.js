import React from 'react';
import styled from 'styled-components'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from './router';
import Banner from './components/Banner';
import Footer from './components/Footer';

import './index.css';
import reportWebVitals from './reportWebVitals';
import 'material-icons/iconfont/material-icons.css';

const FooterWrapper = styled.section`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <>
        <Banner />
        <AppRouter />
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
