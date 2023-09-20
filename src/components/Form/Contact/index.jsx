import React, { useState } from "react";
import styled from 'styled-components';
import TextInput from '../Inputs/Text';
import SelectInput from '../Inputs/Select';
import RadioInput from "../Inputs/Radio";
import TextArea from "../Inputs/TextArea"
import Validate from "../Inputs/Validate";
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

const fame = [
    { value: "Facebook", label: "Facebook" },
    { value: "Instagram", label: "Instagram" },
    { value: "Flyers", label: "Flyers" },
    { value: "Site Internet", label: "Site Internet" },
    { value: "Bouche à oreille", label: "Bouche à oreille" },
    { value: "Autre", label: "Autre" },
  ];

const reason = [
    { value: "Demande d'information", label: "Demande d'information" },
    { value: "Demande de devis", label: "Demander un devis" },
    { value: "Laisser un avis", label: "Laisser un avis" },
    { value: "Problème sur le site", label: "Problème sur le site" },
    { value: "Autre", label: "Autre (précisez dans le message)" },
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
    @media (max-width: 500px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 50px;
        max-width: 800px;
        width: 100%;
        justify-content: center;
        align-items: center;
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
    @media (max-width: 500px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 50px;
        max-width: 800px;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
`

const ConfirmWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    @media screen and (max-width: 768px) {
        justify-content: center;
        align-items: center;
    }
`

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
    const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const [recaptchaValue, setRecaptchaValue] = useState(null);

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zip: "",
        email: "",
        phone: "",
        reason: "",
        fame: "",
        message: "",
    });

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {
            const response = await axios.post(`${backendUrl}/contact`, {...formData, recaptchaValue});
            alert("Votre message a bien été envoyé");
            setFormData({
                firstName: "",
                lastName: "",
                address: "",
                city: "",
                zip: "",
                email: "",
                phone: "",
                reason: "",
                fame: "",
                message: "",
            });
            setRecaptchaValue(null);
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
                    <TextInput name="firstName" label="Prénom" placeholder="Martine" onChange={handleChange} />
                    <TextInput name="lastName" label="Nom" placeholder="Dupuis" onChange={handleChange} />
                </TwoWrapper>
                <ThreeWrapper>
                    <TextInput name="address" label="Adresse" placeholder="5 rue Montaigne" onChange={handleChange} />
                    <TextInput name="city" label="Ville" placeholder="Paris" onChange={handleChange} />
                    <TextInput name="zip" label="Code postal" placeholder="75015" onChange={handleChange} />
                </ThreeWrapper>
                <TwoWrapper>
                    <TextInput name="email" label="Email" placeholder="exemple@mail.com" onChange={handleChange} />
                    <TextInput name="phone" label="Téléphone" placeholder="0611121314" onChange={handleChange} />
                </TwoWrapper>
                <OneWrapper>
                    <SelectInput name="reason" label="La raison de votre message" placeholder="Choisissez ici" options={reason} onChange={handleChange} />
                    <RadioInput name="fame" label="Vous avez entendu parler de Marilou grâce à :" options={fame} onChange={handleChange} />
                    <TextArea name="message" label="Votre message" placeholder="Vous pouvez écrire votre message ici .." onChange={handleChange} />
                </OneWrapper>
                <ConfirmWrapper>
                    <ReCAPTCHA
                        sitekey={recaptchaKey}
                        onChange={handleRecaptchaChange}
                    />
                    <Validate text="Entrer en contact" type="submit" disabled={!recaptchaValue}/>
                </ConfirmWrapper>
            </FormWrapper>
        </Container>
    );
};

export default ContactForm;
