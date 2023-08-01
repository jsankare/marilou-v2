import React from "react";
import styled from 'styled-components'
import '../src/index.css'
import Banner from '../src/components/Banner';
import Footer from '../src/components/Footer';

const FooterWrapper = styled.section`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Banner />
            <Component { ...pageProps } />
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
        </>
    );
};

export default App;

    
    