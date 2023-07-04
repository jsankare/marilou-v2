import React from "react";
import styled from 'styled-components';
import Header from '../../components/PageHero';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`

const Values = () => {
    return (
        <Container>
            <Header image="/images/dog_mockup.jpg" title="Nous contacter" subtitle="La communication est un art qui implique d'écouter autant que de parler." author="Epictète" />
        </Container>
    );
};

export default Values;
