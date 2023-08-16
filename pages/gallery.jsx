import React from 'react';
import styled from 'styled-components';
import Header from '../src/components/PageHero';
import Head from "next/head";
import GaleryImage from '../src/components/GaleryPicture';

const data = [
    {
        id: 1,
        image: '/images/dog_sunset.jpg',
        title: 'test',
        caption: 'testcaption',
    },
    {
        id: 2,
        image: '/images/dog_sunset.jpg',
        title: 'test2',
        caption: 'testcaption2',
    },
    {
        id: 3,
        image: '/images/dog_sunset.jpg',
        title: 'test',
        caption: 'testcaption',
    },
    {
        id: 4,
        image: '/images/dog_sunset.jpg',
        title: 'test2',
        caption: 'testcaption2',
    },
    {
        id: 5,
        image: '/images/dog_sunset.jpg',
        title: 'test',
        caption: 'testcaption',
    },
    {
        id: 6,
        image: '/images/dog_sunset.jpg',
        title: 'test2',
        caption: 'testcaption2',
    }
]

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    gap: 10px;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    gap: 15px;
`

const Add = styled.button`
    font-size: 26px;
    padding: 10px;
`

const Gallery = () => {

    return (
        <Container>
            <Head>
            <title>Marilou - Galerie</title>
            </Head>
            <Header image="/images/dog_sunset.jpg" title="Galerie" subtitle="La photographie est un arrêt du cœur d'une fraction de seconde." author="Pierre Movila" />
            <Add>Ajouter une photo</Add>
            <Wrapper>
                {data.map((display) => (
                    <GaleryImage 
                        key={display.id}
                        image={display.image}
                        title={display.title}
                        caption={display.caption}
                    />
                ))}
            </Wrapper>
        </Container>
    );
};

export default Gallery;
