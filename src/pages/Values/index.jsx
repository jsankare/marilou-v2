import React from "react";
import styled from 'styled-components';
import Header from '../../components/PrestationTitle'
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
            <Header image="/images/dogs_with_toy.jpg" title="Nos valeurs" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." />
            <Pitch />
            <Articles />
        </Container>
    );
};

export default Values;
