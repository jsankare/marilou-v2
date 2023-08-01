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
                <title>Devis</title>
            </Head>
            <Header image="/images/dog_mockup.jpg" title="Nous contacter" subtitle="La communication est un art qui implique d'écouter autant que de parler." author="Epictète" />
            <EstimateForm />
        </Container>
    );
};

export default Values;
