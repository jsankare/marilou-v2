import React from "react";
import styled from 'styled-components';
import Hero from '../../components/Hero';
import Concept from '../../components/Concept';
import Prestations from '../../components/Prestations';

const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
`

const Home = () => {
    return (
        <Wrapper>
            <Hero />
            <Concept />
            <Prestations />
        </Wrapper>
    );
};

export default Home;
