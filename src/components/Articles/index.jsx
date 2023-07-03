import React from "react";
import styled from 'styled-components';
import SmallArticle from "./SmallArticle";
import BigArticle from "./BigArticle";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 1200px;
`

const Wrapper = styled.div`
    display: flex;
    gap: 15px;
`

const Title = styled.h2`
    font-size: 48px;
    font-weight: 800;
`

const BigWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
`

const Duo = styled.div`
    display: flex;
    gap: 20px;
`

const SmallWrapper = styled.div`
    display: flex;
    flex: 70%;
`


const Articles = () => {
    return (
        <Container>
            <Title>Des articles interessants ici</Title>
            <Wrapper>
            <BigWrapper>
                <Duo>
                    <SmallArticle  
                    image="/images/dogWell.jpg"
                    title="Ceci est un exemple de titre" 
                    catchphrase="lorem ipsm dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus." 
                    link="https://www.google.com"
                    />
                    <SmallArticle  
                    image="/images/dogWell.jpg"
                    title="Ceci est un exemple de titre" 
                    catchphrase="lorem ipsm dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus." 
                    link="https://www.google.com" 
                    />
                </Duo>
                <BigArticle 
                image="/images/dogWell.jpg"
                title="Ceci est un exemple de titre" 
                catchphrase="lorem ipsm dolor sit amet, consectetur  adipiscing elit. Suspendisse varius enim in eros elementum tristique  adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus." 
                link="https://www.google.com" 
                />
            </BigWrapper>
            <SmallWrapper>
                <BigArticle 
                flexDirection
                image="/images/dogWell.jpg"
                title="Ceci est un exemple de titre" 
                catchphrase="lorem ipsm dolor sit amet, sit amet , consectetur adipiscing elit. Suspendisse varius enim in econsectetur adipiscing elit. Suspendisse varius enim in eros el consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus." 
                link="https://www.google.com" 
                />
            </SmallWrapper>
            </Wrapper>
        </Container>
    );
};

export default Articles;
