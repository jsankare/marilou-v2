import React from "react";
import styled from 'styled-components'

const Container = styled.div`
  background-image: url('/images/dogs_near_water.jpg');
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center;
  filter: brightness(80%);
  width: 100%;
  height: 570px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  color: white;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-left: 5%;
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
        <Content>
            <Title>Garde animaux Seine-et-marne (77)</Title>
            <Subtitle>Prenez soin de votre animal de compagnie en Seine-et-Marne avec Marilou - Services de garde d'animaux de qualité pour votre tranquillité d'esprit.</Subtitle>
        </Content>
      </Container>
    );
  }
  

export default Hero