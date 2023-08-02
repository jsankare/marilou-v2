import React from "react";
import styled, { createGlobalStyle } from 'styled-components'
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import { Roboto } from 'next/font/google'

const FooterWrapper = styled.section`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

const GlobalStyle = createGlobalStyle`
    html {
        font-family: ${roboto.style.fontFamily};
        scroll-behavior: smooth;
        }
        html, body, #__next {
        height: 100%;
        }
    *   {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        }
`

const App = ({ Component, pageProps }) => {
    return (
        <>
            <GlobalStyle />
            <Navigation />
            <Component { ...pageProps } />
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
        </>
    );
};

export default App;

    
    