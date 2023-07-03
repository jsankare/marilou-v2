import React from "react";
import styled from 'styled-components';

const Container = styled.section`
    position: relative;
    width: 100%;
`

const Background = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
    position: absolute;
    z-index: -10;
    filter: brightness(0.5);
`

const TextWrapper = styled.div`
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 400px;
    gap: 10px;
`

const Title = styled.h1`
    font-weight: 800;
    font-size: 52px;
`

const Subtext = styled.h2`
    font-size: 22px;
`

const PrestationTitle = ({ image, title, subtitle }) => {
    return (
        <Container>
            <Background src={image} />
            <TextWrapper>
                <Title> {title} </Title>
                <Subtext> {subtitle} </Subtext>
            </TextWrapper>         
        </Container>
    );
};

export default PrestationTitle;
