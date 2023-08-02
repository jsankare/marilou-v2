import React from "react";
import styled from 'styled-components';
import Dropdown from "./Dropdown";

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
        answer: `Je garde les chiens et les chats. Si vous avez une demande spécifique, vous pouvez me joindre grâce au formulaire de contact situé en dessous.`
    },
    {
        id: '7CN1',
        question: `Je dois réserver une visite et une promenade ?`,
        answer: `Oui, les visites et les promenades sont deux prestations différentes.`
    },
    {
        id: '78E4',
        question: `Si j'ai trois chiens, je dois réserver trois promenades ?`,
        answer: `Non, vous pouvez me communiquer le nombre d'animaux à promener dans la demande de devis. Néanmoins, sachez qu'à partir du 3ème chien et pour chaque chien supplémentaire, le prix augmente de 5€`
    },
    {
        id: 'FK2R',
        question: `Êtes-vous disponible les jours fériés / jours de fête ?`,
        answer: `Oui, je suis disponible. Il y a toutefois une majoration de 25% pour Noël et le premier de l'An.`
    }
]

const Container = styled.section`
    width: 100%;
    max-width: 1300px;
    padding: 0 20px;
    display: flex;
    gap: 50px;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
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

const FaQText = styled.p`
    font-size: 18px;
    width: 100%;
`

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
                <FaQText>Des réponses détaillées aux questions les plus fréquemment posées : Trouvez ici l&apos;aide dont vous avez besoin.</FaQText>
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
