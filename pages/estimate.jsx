import React from "react";
import styled from 'styled-components';
import Header from '../src/components/PageHero';
import EstimateForm from "../src/components/Form/Estimate";
import Head from "next/head";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    width: 100%;
`

const Values = () => {
    return (
        <Container>
            <Head>
                <title>Marilou - Devis</title>
                <meta name="description" content="Vous pouvez ici demander un devis pour effectuer une garde ou une promenade pour votre animal. Marilou pet-sitting répondra le plus vite possible." />
            </Head>
            <Header image="/images/dog_mockup.webp" title="Demander un devis" subtitle="La communication est un art qui implique d'écouter autant que de parler." author="Epictète" />
            <EstimateForm />
        </Container>
    );
};

export default Values;
