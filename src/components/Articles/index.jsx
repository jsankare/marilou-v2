import React from "react";
import styled from 'styled-components';
import SmallArticle from "./SmallArticle";
import BigArticle from "./BigArticle";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1300px;
    padding: 0 20px;
    gap: 20px;
`

const Wrapper = styled.div`
    display: flex;
    gap: 25px;
`

const Title = styled.h2`
    font-size: 48px;
    font-weight: 800;
`

const BigWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Duo = styled.div`
    display: flex;
    gap: 25px;
`

const SmallWrapper = styled.div`
    display: flex;
    flex: 70%;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`


const Articles = () => {
    return (
        <Container>
            <Title>Les actualités animales</Title>
            <Wrapper>
            <BigWrapper>
                <Duo>
                    <SmallArticle  
                    image="/images/beautiful-cat-portrait-close-up.jpg"
                    title="Le chat aussi a des besoins" 
                    catchphrase="" 
                    link="https://www.google.com"
                    />
                    <SmallArticle  
                    image="/images/dog_gradient_ball.jpg"
                    title="Sociabilité & activité" 
                    catchphrase="Pour qu'il soit heureux, il faudra lui permettre de courir, de jouer et même de rencontrer d'autres chiens (..) lui offrir de quoi se dépenser aussi bien physiquement qu'intellectuellement." 
                    link="https://www.futura-sciences.com/planete/questions-reponses/chien-chien-peut-il-vivre-heureux-appartement-10583/#beaucoup-dattention-et-un-peu-dexercice" 
                    />
                </Duo>
                <BigArticle 
                image="/images/pitbull_ball.jpg"
                title="Votre animal a besoin de se dépenser" 
                catchphrase="La domestication des chiens a privé ceux-ci d’un apport important en exercice physique. En effet, tel que mentionné par l’Ordre des médecins vétérinaires du Québec [1], « À l’état sauvage, les canidés passent la majorité de leur temps à chercher de la nourriture et à chasser. Certaines espèces parcourent même plus de 25 km par jour »."
                link="https://beli.ca/les-besoins-dactivite-de-votre-chien/" 
                />
            </BigWrapper>
            <SmallWrapper>
                <BigArticle 
                flexColumn
                image="/images/guinea_pigs.jpg"
                title="Nos amis les rongeurs" 
                catchphrase="Les rongeurs domestiques ne sont pas des animaux relativement indépendants. Ils ont besoin de soins constants, quotidiens et adaptés pour ne pas dépérir. Plus fragiles que les chats et plus dépendants encore que les chiens, les rongeurs ne peuvent survivre sans votre présence." 
                link="https://lemagdesanimaux.ouest-france.fr/dossiers-cat2-1-rongeurs-domestiques.html" 
                />
            </SmallWrapper>
            </Wrapper>
        </Container>
    );
};

export default Articles;
