import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const Icon = styled.img`
    width: 100%;
    max-width: 75px;
`

const Title = styled.h3`
    font-weight: 800;
    font-size: 28px;
`

const Description = styled.p`
    font-size: 18px;
`

const PitchCard = ({image, title, description}) => {
    return (
        <Container>
            <Icon src={image} />
            <Title> {title} </Title>
            <Description> {description} </Description>
        </Container>
    );
};

export default PitchCard;
