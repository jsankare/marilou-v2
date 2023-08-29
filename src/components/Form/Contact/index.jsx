import React, { useState } from "react";
import styled from 'styled-components';
import TextInput from '../Inputs/Text';
import SelectInput from '../Inputs/Select';
import RadioInput from "../Inputs/Radio";
import TextArea from "../Inputs/TextArea"
import Validate from "../Inputs/Validate";
import axios from 'axios';

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
    @media (max-width: 375px) {
        
    }
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

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

    const handleChange = (name, value) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const [formData, setFormData] = useState({
        prenom: "",
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

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {
            const response = await axios.post(`${backendUrl}/contact`, formData);
            console.log("Form data sent:", response.data);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <Container id="contact" >
            <Heading>
                <Title>Me contacter</Title>
            </Heading>
            <FormWrapper onSubmit={handleSubmit}>
                <TwoWrapper>
                    <TextInput id="prenom" label="Prénom" placeholder="Martine" />
                    <TextInput id="lastName" label="Nom" placeholder="Dupuis" />
                </TwoWrapper>
                <ThreeWrapper>
                    <TextInput id="address" label="Adresse" placeholder="5 rue Montaigne" />
                    <TextInput id="city" label="Ville" placeholder="Paris" />
                    <TextInput id="zip" label="Code postal" placeholder="75015" />
                </ThreeWrapper>
                <TwoWrapper>
                    <TextInput id="mail" label="Email" placeholder="exemple@mail.com" />
                    <TextInput id="phone" label="Téléphone" placeholder="0611121314" />
                </TwoWrapper>
                <OneWrapper>
                    <SelectInput id="reason" label="La raison de votre message" placeholder="Choisissez ici" name="reason" options={reason} />
                    <RadioInput id="fame" label="Vous avez entendu parler de Marilou grâce à :" name="fame" options={fame} />
                    <TextArea id="message" label="Votre message" placeholder="Vous pouvez écrire votre message ici .." />
                </OneWrapper>
                <ConfirmWrapper>
                    <Validate id="confirm" text="Confirmer" type="submit" />
                </ConfirmWrapper>
            </FormWrapper>
        </Container>
    );
};

export default ContactForm;
