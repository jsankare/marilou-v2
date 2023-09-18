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
                <Description>
                    Marilou, auto entrepreneuse et passionnée d&apos;animaux, j&apos;ai voulu rallier passion et métier pour ne faire qu&apos;un !
                    <br />
                    <br />
                    Je me déplace chez vous pour le plus grand confort de vos loulous !
                    <br />
                    <br />
                    Spécialisé en remplacement d&apos;élevage canin, je me déplace jusqu&apos;à 500kms de mon domicile (situé en Seine et Marne), pour des remplacements, week-end d&apos;expos etc.. 
                    <br />
                    <br />
                    Je possède l&apos;ACACED , 3 ans d&apos;expérience en refuge animalier et l&apos;assurance RC Pro AXA
                </Description>
            </Content>
        </Container>
    );
};

export default AboutMe;
