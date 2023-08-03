import React from "react";
import styled from 'styled-components';
import Hero from '../src/components/Hero';
import Concept from '../src/components/Concept';
import Prestations from '../src/components/Prestations';
import AboutMe from "../src/components/AboutMe";
import Testimonial from "../src/components/Testimonial";
import Faq from "../src/components/Faq";
import ContactForm from "../src/components/Form/Contact";
import Head from 'next/head'

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    gap: 75px;
    align-items: center;
`

const PagePadding = styled.div`
    display: flex;
    flex-direction: column;
    gap: 75px;
    align-items: center;
    padding: 0 25px;
`

const Home = () => {
    return (
        <Wrapper>
            <Head>
                <title>Marilou</title>
            </Head>
            <Hero />
            <PagePadding>
                <Concept />
                <Prestations />
                <AboutMe />
                <Testimonial />
                <Faq />
                <ContactForm />
            </PagePadding>
        </Wrapper>
    );
};

export default Home;
