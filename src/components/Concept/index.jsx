import React from "react";
import styled from 'styled-components';
import ConceptCard from "../ConceptCard";

const data = [
    {
        id: '1',
        image: '/images/husky.svg',
        title: `Prenons contact`,
        subtitle: `Chez Marilou, nous sommes là pour vous aider à trouver le service de garde idéal pour votre ami à quatre pattes.`
    },
    {
        id: '2',
        image: '/images/corgi.svg',
        title: `Analysons vos besoins`,
        subtitle: `Trouvez le service de pet-sitting idéal pour votre animal de compagnie en toute simplicité !`
    },
    {
        id: '3',
        image: '/images/cat.svg',
        title: `Je m'occupe de tout`,
        subtitle: `Vous pouvez partir l'esprit tranquille, nous prenons soin de votre animal de compagnie comme si c'était le nôtre.`
    }
];

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 30px;
`

const CardWrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
    flex-wrap: wrap;
    justify-content: space-around;
    @media (max-width: 768px) {
        
    }
`

const Title = styled.h2`
    font-size: 30px;
    color: #538A82;
    font-weight: bold;
`

const Concept = () => {
    return (
        <Container>
            <Title>Comment ça marche ?</Title>
            <CardWrapper>
                {data.map((card) => (
                    <ConceptCard 
                        key={card.id}
                        image={card.image}
                        title={card.title}
                        subtitle={card.subtitle}
                    />
                ))}
            </CardWrapper>
        </Container>
    );
};

export default Concept;
