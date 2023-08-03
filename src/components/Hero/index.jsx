import React from "react";
import styled from 'styled-components';

const Container = styled.section`
    position: relative;
    width: 100%;
`

const Background = styled.img`
    width: 100%;
    height: 570px;
    object-fit: cover;
    object-position: 50% 15%;
    position: absolute;
    z-index: -10;
    filter: brightness(0.45);
    @media (max-width: 1024px) {
        height: 450px;
    }
`

const Content = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 570px;
    gap: 50px;
    padding: 0 100px;
    @media (max-width: 1024px) {
        height: 450px;
        padding: 0 50px;
    }
`

const Title = styled.h1`
    font-size: 50px;
    font-weight: bold;
    @media (max-width: 1024px) {
        font-size: 34px;
    }
    @media (max-width: 425px) {
        font-size: 26px;
    }
`

const Subtitle = styled.h2`
    font-size: 30px;
    @media (max-width: 425px) {
        font-size: 20px;
    }
`

function Hero() {
    return (
        <Container>
            <Background src="/images/homepage_background.jpg" />
            <Content>
                <Title>Garde animaux Seine-et-marne (77)</Title>
                <Subtitle>Prenez soin de votre animal de compagnie en Seine-et-Marne avec Marilou - Services de garde d&apos;animaux de qualité pour votre tranquillité d&apos;esprit.</Subtitle>
            </Content>
        </Container>
    );
}

export default Hero;
