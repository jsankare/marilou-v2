import React from "react";
import styled from 'styled-components';
import Header from '../../components/PageHero';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`

const Prestations = () => {
    return (
        <Container>
            <Header image="/images/prestationsbackground.jpg" title="Promenades & visites" subtitle="La plus petite des bonnes actions envers un animal est un pas vers la construction d'un monde meilleur." author="Richard Carlson" />
        </Container>
    );
};

export default Prestations;
