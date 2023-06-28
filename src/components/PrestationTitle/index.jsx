import React from "react";
import styled from 'styled-components';

const Container = styled.section`
    position: relative;
`

const Background = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
    position: absolute;
    z-index: -10;
    filter: brightness(0.8);
`

const TextWrapper = styled.div`
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 400px;
`

const Title = styled.h1`
    font-weight: 800;
    font-size: 50px;
`

const Subtext = styled.h2`
    font-size: 20px;
`

const PrestationTitle = () => {
    return (
        <Container>
            <Background src="/images/prestationsbackground.jpg" />
            <TextWrapper>
                <Title>Promenades & visites</Title>
                <Subtext>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </Subtext>
            </TextWrapper>         
        </Container>
    );
};

export default PrestationTitle;
