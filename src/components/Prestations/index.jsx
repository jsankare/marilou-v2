import React from "react";
import styled from 'styled-components';
import PrestationCard from "./PrestationCard";

const data = [
    {
        id: 'FL2K',
        image: '/images/walking.png',
        title: 'Promenade',
        description: ` Votre chien a besoin de se dégourdir les pattes ? Marilou est là pour lui offrir des balades énergisantes et stimulantes. Qu'il s'agisse de courses dans le parc ou de longues promenades relaxantes, nous adaptons chaque sortie selon les besoins individuels de votre fidèle compagnon.`,
        path: `/prestations`,
        cta: `Me renseigner`,
        disabled: false,
    },
    {
        id: '85D1',
        image: '/images/houseVisit.jpg',
        title: `Visite à domicile`,
        description: `Lorsque vous vous absentez, nous sommes là pour veiller sur votre animal de compagnie dans le confort de son propre foyer. Nos soins personnalisés incluent des visites régulières pour nourrir, câliner et jouer avec votre animal. Nous veillons à ce que votre compagnon se sente aimé et en sécurité, réduisant ainsi le stress lié à votre absence.`,
        path: `/prestations`,
        cta: `Me renseigner`,
        disabled: false,
    },
    {
        id: 'D86Z',
        image: '/images/dogTraining.jpg',
        title: `Éducation canine`,
        description: `Pour les propriétaires soucieux d'éduquer et de socialiser leurs chiens, nous offrons des séances d'éducation canine adaptées à leurs besoins spécifiques. Nos dresseurs expérimentés utilisent des méthodes positives et encourageantes pour enseigner des commandes de base, corriger les comportements indésirables et favoriser une relation harmonieuse entre vous et votre animal.`,
        path: `/404`,
        cta: `Bientôt disponible`,
        disabled: true,
    },
    {
        id: 'D92E',
        image: '/images/dogWell.jpg',
        title: `Bien être animal`,
        description: `Découvrez en quoi nos services rendent la vie de votre animal meilleure. Offrez-leur l'amour, l'attention et les soins qu'ils méritent, même lorsque vous êtes absents.`,
        path: `/values`,
        cta: `Me renseigner`,
        disabled: false,
    }
];

const Container = styled.section `
    width: 100%;
    max-width: 1300px;
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    gap: 20px;
`


const Prestations = () => {
    return (
        <Container>
            {data.map((card) => (
                <PrestationCard 
                    key={card.id}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    path={card.path}
                    cta={card.cta}
                    disabled={card.disabled}
                />
            ))}
        </Container>
    );
};

export default Prestations;
