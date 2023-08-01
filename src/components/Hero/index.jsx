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
    position: absolute;
    z-index: -10;
    filter: brightness(0.8);
`

const Content = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 570px;
    gap: 50px;
    padding: 0 100px;
`

const Title = styled.h1`
    font-size: 50px;
    font-weight: bold;
`

const Subtitle = styled.h2`
    font-size: 30px;
`

function Hero() {
    return (
        <Container>
            <Background src="/images/dogs_near_water.jpg" />
            <Content>
                <Title>Garde animaux Seine-et-marne (77)</Title>
                <Subtitle>Prenez soin de votre animal de compagnie en Seine-et-Marne avec Marilou - Services de garde d&apos;animaux de qualité pour votre tranquillité d&apos;esprit.</Subtitle>
            </Content>
        </Container>
    );
}

export default Hero;
