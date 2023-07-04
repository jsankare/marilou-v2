import React from "react";
import styled from 'styled-components';
import Header from '../../components/PageHero';
import Pitch from "../../components/Pitch";
import Articles from "../../components/Articles";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`

const Values = () => {
    return (
        <Container>
            <Header image="/images/dogs_with_toy.jpg" title="Nos valeurs" subtitle="La grandeur d'une nation et son progrès moral peuvent être jugés par la manière dont elle traite ses animaux." author="Mahatma Gandhi" />
            <Pitch />
            <Articles />
        </Container>
    );
};

export default Values;
