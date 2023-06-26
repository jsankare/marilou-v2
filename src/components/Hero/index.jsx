import React from "react";
import img from '../../assets/group.png';
import styled from 'styled-components'

const Container = styled.div`
  background-color: #DDC6B8;
  justify-content: space-between;
  display: flex;
`;

const Content = styled.div`
  padding: 100px;
  line-height: 75px;
  max-width: 40%;
`;

const Title = styled.h1`
  font-family: Dosis;
  font-size: 75px;
  font-weight: 1000;
`;

const Subtitle = styled.h2`
  font-family: Dosis;
  font-size: 50px;
  font-weight: 750;
`;

const Location = styled.h3`
  font-family: Dosis;
  font-size: 40px;
  font-weight: 500;
`;

const ContactButton = styled.button`
  background-color: #F46F30;
  color: white;
  border: none;
  border-radius: 10px;
  height: 44px;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 550;
  transition: 0.2s;

  &:hover {
    filter: brightness(120%);
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const HeroImage = styled.img`
  padding: 20px;
`;

function Hero() {
    return (
      <Container>
        <Content>
          <Title>Marilou</Title>
          <Subtitle>Services de garde d'animaux de qualité pour votre tranquillité d'esprit</Subtitle>
          <Location>Seine et Marne</Location>
          <ContactButton>Me contacter<span className="material-icons">keyboard_arrow_right</span></ContactButton>
        </Content>
        <HeroImage src={img} alt="dog pic" />
      </Container>
    );
  }
  

export default Hero