import React from "react";
import styled from 'styled-components';
import Dropdown from "../Dropdown";

const data = [
    {
        id: 'FLM1',
        question: `Est-ce que vous pouvez garder des animaux chez vous ?`,
        answer: `Les gardes d'animaux se font exclusivement aux domiciles des propriétaires, je ne fais aucune garde à mon domicile à ce jour.`
    },
    {
        id: 'VKI2',
        question: `Pouvez-vous rester dormir sur place ?`,
        answer: `Je ne dors pas sur place, mais je peux effectuer mes visites du matin au soir selon votre convenance.`
    },
    {
        id: 'FM2I',
        question: `Quel type d'animal gardez-vous ?`,
        answer: `Je peux garder tout type d'animal domestique. Si vous avez une demande spécifique, vous pouvez me joindre grâce au formulaire de contact situé en dessous.`
    },
    {
        id: '7CN1',
        question: `Je dois réserver une visite et une promenade ?`,
        answer: `Non, le prix des promenades est déjà inclus dans le tarif visites.`
    },
    {
        id: '78E4',
        question: `Si j'ai trois chiens, je dois réserver trois promenades ?`,
        answer: `Non, le prix des promenades ne change pas en fonction du nombre d'animaux que vous avez.`
    },
    {
        id: 'FK2R',
        question: `Êtes-vous disponible les jours fériés / jours de fête ?`,
        answer: `Oui, je suis disponible. Il y a toutefois une majoration de 25% pour Noël et le premier de l'An.`
    }
]

const Container = styled.section`
    width: 100%;
    max-width: 1200px;
    display: flex;
`

const Divider = styled.div`
    height: 1px;
    background-color: black;
    width: 100%;
`

const Heading = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const FaqTitle = styled.h3`
    font-size: 30px;
    font-weight: 800;
`

const FaQText = styled.p``

const Questions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
`

const Faq = () => {
    return (
        <Container>
            <Heading>
                <FaqTitle>FAQs</FaqTitle>
                <FaQText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</FaQText>
            </Heading>
            <Questions>
            <Divider />
                {data.map((dropdown) => (
                    <Dropdown 
                    key={dropdown.id}
                    title={dropdown.question}
                    answer={dropdown.answer}
                    />
                ))}
            </Questions>
        </Container>
    );
};

export default Faq;
