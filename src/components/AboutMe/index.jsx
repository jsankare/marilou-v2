import React from "react";
import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    width: 100%;
    max-width: 1300px;
    align-items: center;
    margin: 0;
    gap: 50px;
    @media (max-width: 1024px) {
        flex-direction: column-reverse;
    }
`

const Picture = styled.img`
    width: 100%;
    max-width: 600px;
    height: 100%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 5px;
    @media (max-width: 425px) {
        width: 90%;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    @media (max-width: 425px) {
        width: 90%;
        align-items: center;
        margin: 0 auto;
    }
`

const Title = styled.h2`
    font-size: 30px;
    color: #538A82;
    font-weight: bold;
`

const Description = styled.p``

const AboutMe = () => {
    return (
        <Container>
            <Picture src="/images/marilou.jpeg" />
            <Content>
                <Title>À Propos de Marilou</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</Description>
            </Content>
        </Container>
    );
};

export default AboutMe;
