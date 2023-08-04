import React from "react";
import styled from 'styled-components';
import Header from '../src/components/PageHero';
import Head from "next/head";

const Container = styled.section``

const Gallery = () => {
    return (
        <Container>
            <Head>
            <title>Marilou - Galerie</title>
            </Head>
            <Header image="/images/dog_sunset.jpg" title="Galerie" subtitle="La photographie est un arrêt du cœur d'une fraction de seconde." author="Pierre Movila" />
        </Container>
    );
};

export default Gallery;
