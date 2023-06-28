import React from "react";
import styled from 'styled-components';
import Header from '../../components/PrestationTitle'
import Pitch from "../../components/Pitch";

const Container = styled.section``

const Prestations = () => {
    return (
        <Container>
            <Header />
            <Pitch />
        </Container>
    );
};

export default Prestations;
