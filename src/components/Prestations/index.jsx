import React from "react";
import styled from 'styled-components';
import PrestationCard from "../PrestationCard";

const data = [
    {
        id: 'FL2K',
        image: '/images/walking.png',
        title: 'Promenade',
        description: `lorem ipsum hfezr jdkoezu dfijoez`,
        path: ``
    },
    {
        id: '85D1',
        image: '/images/houseVisit.jpg',
        title: `Visite à domicile`,
        description: `lorem ipsum hfezr jdkoezu dfijoez`,
        path: ``
    },
    {
        id: 'D86Z',
        image: '/images/dogTraining.jpg',
        title: `Éducation canine`,
        description: `lorem ipsum hfezr jdkoezu dfijoez`,
        path: ``
    },
    {
        id: 'D92E',
        image: '/images/dogWell.jpg',
        title: `Bien être animal`,
        description: `lorem ipsum hfezr jdkoezu dfijoez`,
        path: ``
    }
];

const Container = styled.section `
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
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
                    // path={card.path}
                />
            ))}
        </Container>
    );
};

export default Prestations;
