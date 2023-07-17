import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 100%;
    border-radius: 10px;
    margin: 10px;
    gap: 20px;
`

const Image = styled.img`
    filter: drop-shadow(5px 3px 3px #000000);
`

const Title = styled.h3`
    font-size: 24px;
    font-weight: 700;
`

const Subtitle = styled.p`
    text-align: center;
    font-size: 18px;
`

const ConceptCard = ({image, title, subtitle}) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Image src={image} alt="" />
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    );
};

export default ConceptCard;
