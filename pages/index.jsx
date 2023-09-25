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
    @media (max-width: 375px) {
        padding: 0 10px;
    }
`

const Home = () => {
    return (
        <Wrapper>
            <Head>
                <title>Marilou</title>
                <meta name="description" content="Marilou, service de pet-sitting, se propose pour prendre soin et garder, promener et/ou soigner vos chiens. Entrepreneuse qualifiée et passionnée, Marilou saura écouter et adapter sa prestation à vos besoins et ceux de vos animaux de compagnie." />
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
