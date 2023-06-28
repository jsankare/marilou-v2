import React from "react";
import styled from 'styled-components';
import Hero from '../../components/Hero';
import Concept from '../../components/Concept';
import Prestations from '../../components/Prestations';
import AboutMe from "../../components/AboutMe";

const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  gap: 75px;
  align-items: center;
`

const Home = () => {
    return (
        <Wrapper>
            <Hero />
            <Concept />
            <Prestations />
            <AboutMe />
        </Wrapper>
    );
};

export default Home;
