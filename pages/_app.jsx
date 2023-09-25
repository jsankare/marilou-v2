import React from "react";
import styled, { createGlobalStyle } from 'styled-components'
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import { Roboto } from 'next/font/google';
import Script from 'next/script';

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

    const analytics = process.env.NEXT_PUBLIC_GOOGLE_PUBLIC_ANALYTICS;

    return (
        <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${analytics}`}></Script>
            <Script id="google-analytics">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
        
                gtag('config', '${analytics}');
                `}
            </Script>
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
