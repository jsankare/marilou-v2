import React from "react";
import styled from 'styled-components';
import PitchCard from "../PitchCard";

const data = [
    {
        id: 'FJZK',
        image: '/images/pitch_icon2.png',
        title: 'Les intéractions sociales',
        subtitle: `Votre compagnon a besoin d'interagir avec d'autres êtres vivants pour son épanouissement. Des rencontres enrichissantes lui offriront une vie sociale équilibrée, favorisant son bonheur et sa sociabilité.`
    },
    {
        id: 'FK2I',
        image: '/images/pitch_icon5.png',
        title: 'Exercice physique et stimulation mentale',
        subtitle: ` Votre compagnon a besoin d'exercice et de stimulation mentale réguliers pour rester en forme et éveillé. Nous proposons des activités ludiques et des jeux interactifs qui répondent à ses besoins vitaux, stimulant son corps et son esprit.`
    },
    {
        id: '9FIZ',
        image: '/images/pitch_icon7.png',
        title: 'Alimentation et soin approprié',
        subtitle: `Votre compagnon mérite une alimentation adaptée à ses besoins spécifiques ainsi que des soins attentifs. Une nutrition équilibrée et des soins personnalisés contribuent ainsi à sa santé et à son bien-être optimal, assurant une qualité de vie supérieure.`
    },
    {
        id: 'L42U',
        image: '/images/pitch_icon4.png',
        title: 'Réduction du stress',
        subtitle: `La tranquillité d'esprit de votre compagnon est essentielle. Nos services offrent un environnement serein, des techniques apaisantes et une présence rassurante, permettant de réduire son stress, favorisant ainsi son équilibre émotionnel et son bien-être global.`
    },
    {
        id: 'Z92K',
        image: '/images/pitch_icon6.png',
        title: 'Sécurité et prévention des accidents',
        subtitle: `La sécurité de votre compagnon est notre priorité. Grâce à nous, vous pouvez avoir l'assurance d'une surveillance attentive, de mesures de prévention des accidents et d'une gestion proactive des risques, garantissant ainsi sa sécurité à tout moment.`
    },
    {
        id: '2K45',
        image: '/images/pitch_icon3.png',
        title: 'Routine et familiarité',
        subtitle: `Votre compagnon a besoin d'une routine stable pour se sentir en sécurité et équilibré. Nous pouvons maintenir une routine cohérente, offrant ainsi à votre animal un environnement fiable et stable, favorisant son confort et sa stabilité émotionnelle.`
    },
]

const Container = styled.section`
    width: 100%;
    max-width: 1300px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 50px;
`

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const PitchCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 50px;
`

const Title = styled.h2`
    font-weight: 800;
    font-size: 48px;
`

const Subtitle = styled.p``

const Pitch = () => {
    return (
        <Container>
            <Header>
                <Title>Pourquoi faire appel à nos services ?</Title>
                <Subtitle>Un animal de compagnie est un membre de votre famille. Avec nos services, nous ferons en sorte que tout le soin et l'attention requise pour leur bien-être leur soit donné.</Subtitle>
            </Header>
            <PitchCards>
                {data.map((pitch) => (
                    <PitchCard 
                    key={pitch.id}
                    image={pitch.image}
                    title={pitch.title}
                    description={pitch.subtitle}
                    />
                ))}
            </PitchCards>
        </Container>
    );
};

export default Pitch;
