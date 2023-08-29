import React, { useState } from "react";
import styled from 'styled-components';
import TextInput from '../Inputs/Text';
import SelectInput from '../Inputs/Select';
import RadioInput from "../Inputs/Radio";
import DateInput from "../Inputs/Date"
import NumberInput from "../Inputs/Number"
import TextArea from "../Inputs/TextArea"
import Validate from "../Inputs/Validate";

const status = [
    { value: "company", label: "Une entreprise" },
    { value: "person", label: "Un particulier" },
  ];

const race = [
    { value: "felids", label: "Chat" },
    { value: "canidae", label: "Chien" },
    { value: "felicani", label: "Chien & chat" },
    { value: "others", label: "Autre (précisez dans le message)" },
];

const prestation = [
    { value: "walk15", label: "Promenade(s) - 15mn" },
    { value: "walk30", label: "Promenade(s) - 30mn" },
    { value: "walk45", label: "Promenade(s) - 45mn" },
    { value: "walk60", label: "Promenade(s) - 60mn" },
    { value: "visit", label: "Visite(s)" },
    { value: "walkandvisit", label: "Promenade(s) & visite(s)"},
    { value: "week1", label: "Forfait(s) - 1 semaine" },
    { value: "week2", label: "Forfait(s) - 2 semaines" },
    { value: "month", label: "Forfait(s) - 1 mois" },
]

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    width: 100%;
    max-width: 1200px;
    @media (max-width: 1024px) {
        width: 80%;
        margin: 0;
    }
    @media (max-width: 375px) {
        width: 70%;
    }
`

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
`

const OneWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 50px;
    max-width: 800px;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const TwoWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    max-width: 800px;
    width: 100%;
    @media (max-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
    }
`

const ThreeWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
    max-width: 800px;
    width: 100%;
    @media (max-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
    }
`

const ConfirmWrapper = styled.div``

const Title = styled.h2`
    font-size: 30px;
    color: #538A82;
    font-weight: bold;
    @media screen and (max-width: 375px) {
        font-size: 26px;
    }
`

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    width: 100%;
    max-width: 1200px;
    @media (max-width: 1024px) {
        width: 80%;
        margin: 0;
    }
    @media (max-width: 375px) {
        width: 70%;
    }
`

const ContactForm = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        email: "",
        phone: "",
        reason: "",
        fame: "",
        message: ""
    });

    const handleChange = (name, value) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            console.log(`it's really happening`)
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <Container>
            <Heading>
                <Title>Demander un devis</Title>
            </Heading>
            <FormWrapper onSubmit={handleSubmit} >
                <TwoWrapper>
                    <TextInput label="Prénom" placeholder="Martine" />
                    <TextInput label="Nom" placeholder="Dupuis" />
                </TwoWrapper>
                <ThreeWrapper>
                    <TextInput label="Adresse" placeholder="5 rue Montaigne" />
                    <TextInput label="Ville" placeholder="Paris" />
                    <TextInput label="Code postal" placeholder="75015" />
                </ThreeWrapper>
                <TwoWrapper>
                    <TextInput label="Email" placeholder="exemple@mail.com" />
                    <TextInput label="Téléphone" placeholder="0611121314" />
                    <RadioInput label="Vous êtes :" name="status" options={status} />
                    <NumberInput label="Nombre d'animaux à garder" name="number" placeholder="1, 5, 10 .." />
                </TwoWrapper>
                <TwoWrapper>
                    <SelectInput label="Le type d'animal concerné" placeholder="Choisissez ici" name="race" options={race} />
                    <SelectInput label="Votre prestation choisie" placeholder="Choisissez ici" name="prestation" options={prestation} />
                </TwoWrapper>
                <TwoWrapper>
                <DateInput label="Date de début de garde" />
                    <DateInput label="Date de fin de garde" />
                </TwoWrapper>
                <OneWrapper>
                    <TextArea label="Votre message" placeholder="Vous pouvez écrire votre message ici .." />
                </OneWrapper>
                <ConfirmWrapper>
                    <Validate text="Demander mon devis" type="submit" />
                </ConfirmWrapper>
            </FormWrapper>
        </Container>
    );
};

export default ContactForm;
