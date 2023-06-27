import React from "react";
import styled from 'styled-components';
// import { Link } from "react-router-dom";

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

const Image = styled.img `
    width: 100%;
    height: 100%;
    width: 650px;
    max-height: 320px;
    object-fit: cover;
`

const Title = styled.h3 ``

const Description = styled.p ``

// const CallToAction = styled(Link) ``

const PrestationCard = ({image, title, description, path}) => {
    return (
        <Container>
            <Image src={image} />
            <Title> {title} </Title>
            <Description> {description} </Description>
            {/* <CallToAction to={path} >Me renseigner</CallToAction> */}
        </Container>
    );
};

export default PrestationCard;
