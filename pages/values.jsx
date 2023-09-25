import React from "react";
import styled from 'styled-components';
import Header from '../src/components/PageHero';
import Pitch from "../src/components/Pitch";
import Articles from "../src/components/Articles";
import Head from "next/head";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`

const Values = () => {
    return (
        <Container>
            <Head>
                <title>Marilou - Nos valeurs</title>
                <meta name="description" content="Marilou a des valeurs très fortes en ce qui concerne le bien être animal, la bonne santé des animaux dont elle s'occupe est primordiale. Lors des gardes ou des promenades, Marilou pet sitting s'efforce de produire des prestations de qualité pour ravir les propriétaires et les animaux." />
            </Head>
            <Header image="/images/dogs_with_toy.jpg" title="Nos valeurs" subtitle="La grandeur d'une nation et son progrès moral peuvent être jugés par la manière dont elle traite ses animaux." author="Mahatma Gandhi" />
            <Pitch />
            <Articles />
        </Container>
    );
};

export default Values;
