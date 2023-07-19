import React from "react";
import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    width: 100%;
    max-width: 1200px;
`

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
`

const Wrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    max-width: 800px;
`

const Title = styled.h3``

const Subtext = styled.h4``

const EstimateForm = () => {
    return (
        <Container>
            <Heading>
                <Title>Demander un devis</Title>
                <Subtext>devis devis devis</Subtext>
            </Heading>
            <Wrapper>

            </Wrapper>
        </Container>
    );
};

export default EstimateForm;
