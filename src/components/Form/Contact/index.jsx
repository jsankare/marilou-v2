import React from "react";
import styled from 'styled-components';
import TextInput from '../Inputs/Text';
import SelectInput from '../Inputs/Select';
import RadioInput from "../Inputs/Radio";
import TextArea from "../Inputs/TextArea"

const fame = [
    { value: "facebook", label: "Facebook" },
    { value: "instagram", label: "Instagram" },
    { value: "flyers", label: "Flyers" },
    { value: "website", label: "Site Internet" },
    { value: "hearsay", label: "Bouche à oreille" },
    { value: "other", label: "Autre" },
  ];

const reason = [
{ value: "information", label: "Demande d'information" },
{ value: "estimate", label: "Demander un devis" },
{ value: "feedback", label: "Laisser un avis" },
{ value: "issue", label: "Problème sur le site" },
{ value: "other", label: "Autre (précisez dans le message)" },
];

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    width: 100%;
    max-width: 1200px;
`

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
`

const OneGridWrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 50px;
    max-width: 800px;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const TwoGridWrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    max-width: 800px;
    width: 100%;
`

const ThreeGridWrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
    max-width: 800px;
    width: 100%;
`

const ConfirmWrapper = styled.div``

const Title = styled.h2`
    font-size: 30px;
    color: #538A82;
    font-weight: bold;
`

const ContactForm = () => {
    return (
        <Container>
            <Heading>
                <Title>Me contacter</Title>
            </Heading>
            <TwoGridWrapper>
                <TextInput label="Prénom" placeholder="Martine" />
                <TextInput label="Nom" placeholder="Dupuis" />
            </TwoGridWrapper>
            <ThreeGridWrapper>
                <TextInput label="Adresse" placeholder="5 rue Montaigne" />
                <TextInput label="Ville" placeholder="Paris" />
                <TextInput label="Code postal" placeholder="75015" />
            </ThreeGridWrapper>
            <TwoGridWrapper>
                <TextInput label="Email" placeholder="exemple@mail.com" />
                <TextInput label="Téléphone" placeholder="0611121314" />
            </TwoGridWrapper>
            <OneGridWrapper>
                <SelectInput label="La raison de votre message" placeholder="Choisissez une raison pour votre message" name="reason" options={reason} />
                <RadioInput label="Vous avez entendu parler de Marilou grâce à :" name="fame" options={fame} />
                <TextArea label="Votre message" placeholder="Vous pouvez écrire votre message ici .." />
            </OneGridWrapper>
            <ConfirmWrapper>

            </ConfirmWrapper>
        </Container>
    );
};

export default ContactForm;
