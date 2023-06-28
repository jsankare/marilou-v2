import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 650px;
`

const Image = styled.img `
    width: 100%;
    height: 100%;
    width: 650px;
    max-height: 320px;
    object-fit: cover;
`

const Title = styled.h3 `
    font-weight: 800;
    font-size: 28px;
`

const Description = styled.p `
    text-align: center;
`

const CallToAction = styled(Link) `
    text-decoration: none;
    color: black;
    display: flex;
    gap: 5px;
    font-size: 20px;
`

const PrestationCard = ({image, title, description, path}) => {
    return (
        <Container>
            <Image src={image} />
            <Title> {title} </Title>
            <Description> {description} </Description>
            <CallToAction to={path} >Me renseigner<FontAwesomeIcon icon={faChevronRight} /></CallToAction>
        </Container>
    );
};

export default PrestationCard;
