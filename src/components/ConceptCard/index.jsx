import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 100%;
    max-width: 250px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    border-radius: 10px;
    margin: 10px;
`

const Image = styled.img`

`

const Title = styled.h3`

`

const Subtitle = styled.h3`
    text-align: center;
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
