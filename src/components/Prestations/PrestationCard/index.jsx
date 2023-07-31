import React from "react";
import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 550px;
    ${(props) =>
        props.disabled &&
        css`
            &:hover {
                cursor: not-allowed;
            }
        `
    }
`

const ImageWrapper = styled.div`
    position: relative;
    max-height: 320px;
`

const Image = styled.img `
    width: 100%;
    height: 100%;
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

const DisabledOverlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(34, 34, 34, 0.85);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000000;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DisabledText = styled.p`
    color: #478079;
    font-size: 44px;
    font-weight: 700;
`

const PrestationCard = ({image, title, description, path, disabled, cta}) => {
    return (
        <Container disabled={disabled} >
            <ImageWrapper>
                {disabled && <DisabledOverlay> <DisabledText> {cta} </DisabledText> </DisabledOverlay> }
                <Image src={image} />
            </ImageWrapper>
            <Title> {title} </Title>
            <Description> {description} </Description>
            <CallToAction to={path} > {cta} <FontAwesomeIcon icon={faChevronRight} /></CallToAction>
        </Container>
    );
};

export default PrestationCard;
