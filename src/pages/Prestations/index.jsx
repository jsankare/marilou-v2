import React from "react";
import styled from 'styled-components';
import Header from '../../components/PrestationTitle'

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`

const Prestations = () => {
    return (
        <Container>
            <Header image="/images/prestationsbackground.jpg" title="Promenades & visites" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." />
        </Container>
    );
};

export default Prestations;
