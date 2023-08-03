import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media (max-width: 1024px) {
        max-width: 300px;   
    }
`

const Icon = styled.img`
    width: 100%;
    max-width: 75px;
    @media (max-width: 1024px) {
        max-width: 70px;
    }
`

const Title = styled.h3`
    font-weight: 800;
    font-size: 28px;
    @media (max-width: 1024px) {
        font-size: 24px;
    }
`

const Description = styled.p`
    font-size: 18px;
    @media (max-width: 1024px) {
        font-size: 16px;
    }
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
