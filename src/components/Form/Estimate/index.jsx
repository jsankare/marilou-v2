import React from "react";
import styled from 'styled-components';
import TextInput from '../Inputs/Text';
import SelectInput from '../Inputs/Select';
import RadioInput from "../Inputs/Radio";
import DateInput from "../Inputs/Date"
import NumberInput from "../Inputs/Number"
import TextArea from "../Inputs/TextArea"

const status = [
    { value: "company", label: "Une entreprise" },
    { value: "person", label: "Un particulier" },
  ];

const race = [
    { value: "felids", label: "Chat" },
    { value: "canidae", label: "Chien" },
    { value: "equines", label: "Cheval ou âne" },
    { value: "mustelids", label: "Furet ou putois (races domestiques)" },
    { value: "rodents", label: "Souris, rat, hamster ou gerbille (races domestiques)" },
    { value: "chinchillidae", label: "Chichilla (races domestiques)" },
    { value: "cavileporides", label: "Cochon d'Inde ou lapin (races domestiques)" },
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
                <Title>Demander un devis</Title>
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
                <RadioInput label="Vous êtes :" name="status" options={status} />
                <NumberInput label="Nombre d'animaux à garder" name="number" placeholder="1, 5, 10 .." />
            </TwoGridWrapper>
            <OneGridWrapper>
                <SelectInput label="Le type d'animal que vous voulez faire garder (un ou plusieurs)" placeholder="Choisissez ici" name="race" options={race} />
            </OneGridWrapper>
            <TwoGridWrapper>
            <DateInput label="Date de début de garde" />
                <DateInput label="Date de fin de garde" />
            </TwoGridWrapper>
            <OneGridWrapper>
                <TextArea label="Votre message" placeholder="Vous pouvez écrire votre message ici .." />
            </OneGridWrapper>
            <ConfirmWrapper>

            </ConfirmWrapper>
        </Container>
    );
};

export default ContactForm;
