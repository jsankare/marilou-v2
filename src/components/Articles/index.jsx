import React from "react";
import styled from 'styled-components';
import SmallArticle from "./SmallArticle";
import BigArticle from "./BigArticle";

// articleData.js

const articleData = [
    {
      id: 1,
      image: "/images/beautiful-cat-portrait-close-up.jpg",
      title: "Le chat aussi a des besoins",
      catchphrase: "",
      link: "https://www.google.com"
    },
    {
        id: 2,
      image: "/images/dog_gradient_ball.jpg",
      title: "Sociabilité & activité",
      catchphrase:
        "Pour qu'il soit heureux, il faudra lui permettre de courir, de jouer et même de rencontrer d'autres chiens (..) lui offrir de quoi se dépenser aussi bien physiquement qu'intellectuellement.",
      link:
        "https://www.futura-sciences.com/planete/questions-reponses/chien-chien-peut-il-vivre-heureux-appartement-10583/#beaucoup-dattention-et-un-peu-dexercice"
    },
    {
        id: 3,
      image: "/images/pitbull_ball.jpg",
      title: "Votre animal a besoin de se dépenser",
      catchphrase:
        "La domestication des chiens a privé ceux-ci d’un apport important en exercice physique. En effet, tel que mentionné par l’Ordre des médecins vétérinaires du Québec [1], « À l’état sauvage, les canidés passent la majorité de leur temps à chercher de la nourriture et à chasser. Certaines espèces parcourent même plus de 25 km par jour ».",
      link: "https://beli.ca/les-besoins-dactivite-de-votre-chien/"
    },
    {
        id: 4,
      image: "/images/guinea_pigs.jpg",
      title: "Nos amis les rongeurs",
      catchphrase:
        "Les rongeurs domestiques ne sont pas des animaux relativement indépendants. Ils ont besoin de soins constants, quotidiens et adaptés pour ne pas dépérir. Plus fragiles que les chats et plus dépendants encore que les chiens, les rongeurs ne peuvent survivre sans votre présence.",
      link: "https://lemagdesanimaux.ouest-france.fr/dossiers-cat2-1-rongeurs-domestiques.html"
    }
];

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1300px;
    padding: 0 20px;
    gap: 20px;
`

const DesktopDisplay = styled.div`
    display: flex;
    gap: 25px;
    @media screen and (max-width: 1024px) {
        display: none;
    }
`

const MobileDisplay = styled.div`
    display: none;
    @media screen and (max-width: 1024px) {
        display: block;
    }
`


const Title = styled.h2`
    font-size: 30px;
    color: #538A82;
    font-weight: bold;
`

const BigWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Duo = styled.div`
    display: flex;
    gap: 25px;
`

const Articles = () => {
    return (
      <Container>
        <Title>Les actualités animales</Title>
        <DesktopDisplay>
          <BigWrapper>
            <Duo>
              {articleData
                .filter((article) => article.id <= 2)
                .map((article) => (
                  <SmallArticle
                    key={article.id}
                    image={article.image}
                    title={article.title}
                    catchphrase={article.catchphrase}
                    link={article.link}
                  />
                ))}
            </Duo>
            {articleData
              .filter((article) => article.id > 2)
              .map((article) => (
                <BigArticle
                  key={article.id}
                  image={article.image}
                  title={article.title}
                  catchphrase={article.catchphrase}
                  link={article.link}
                />
              ))}
          </BigWrapper>
        </DesktopDisplay>
        <MobileDisplay>
          <BigWrapper>
            {articleData
              .filter((article) => !article.flexColumn)
              .map((article) => (
                <BigArticle
                  key={article.id}
                  image={article.image}
                  title={article.title}
                  catchphrase={article.catchphrase}
                  link={article.link}
                />
              ))}
          </BigWrapper>
        </MobileDisplay>
      </Container>
    );
  };
  
  export default Articles;
