import React from "react";
import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    width: 100%;
    max-width: 1200px;
    align-items: center;
    margin: 0;
    gap: 50px;
`

const Picture = styled.img`
    width: 100%;
    max-width: 600px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`

const Title = styled.h2`
    font-weight: 800;
    font-size: 24px;
`

const Description = styled.p``

const AboutMe = () => {
    return (
        <Container>
            <Picture src="/images/about_placeholder.jpg" />
            <Content>
                <Title>À Propos de Marilou</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</Description>
            </Content>
        </Container>
    );
};

export default AboutMe;
