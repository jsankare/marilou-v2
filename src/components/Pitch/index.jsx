import React from "react";
import styled from 'styled-components';
import PitchCard from "../PitchCard";

const data = [
    {
        id: 'FJZK',
        image: '/images/pitch_icon2.png',
        title: 'Les intéractions sociales',
        subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.`
    },
    {
        id: 'FK2I',
        image: '/images/pitch_icon5.png',
        title: 'Exercice physique et stimulation mentale',
        subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.`
    },
    {
        id: '9FIZ',
        image: '/images/pitch_icon7.png',
        title: 'Alimentation et soin approprié',
        subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.`
    },
    {
        id: 'L42U',
        image: '/images/pitch_icon4.png',
        title: 'Réduction du stress',
        subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.`
    },
    {
        id: 'Z92K',
        image: '/images/pitch_icon6.png',
        title: 'Sécurité et prévention des accidents',
        subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.`
    },
    {
        id: '2K45',
        image: '/images/pitch_icon3.png',
        title: 'Routine et familiarité',
        subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.`
    },
]

const Container = styled.section`
    width: 100%;
    max-width: 1200px;
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
                <Title>Pourquoi faire appel à mes services ?</Title>
                <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</Subtitle>
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
