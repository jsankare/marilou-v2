import React, { useState } from "react";
import styled from 'styled-components';
import TextInput from '../Inputs/Text';
import SelectInput from '../Inputs/Select';
import RadioInput from "../Inputs/Radio";
import DateInput from "../Inputs/Date";
import NumberInput from "../Inputs/Number";
import TextArea from "../Inputs/TextArea";
import Validate from "../Inputs/Validate";
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

const status = [
    { value: "Entreprise", label: "Une entreprise" },
    { value: "Particulier", label: "Un particulier" },
  ];

const race = [
    { value: "Chat", label: "Chat" },
    { value: "Chien", label: "Chien" },
    { value: "Chien & Chat", label: "Chien & chat" },
    { value: "Autre", label: "Autre (précisez dans le message)" },
];

const prestation = [
    { value: "Promenade(s) - 15mn", label: "Promenade(s) - 15mn" },
    { value: "Promenade(s) - 30mn", label: "Promenade(s) - 30mn" },
    { value: "Promenade(s) - 45mn", label: "Promenade(s) - 45mn" },
    { value: "Promenade(s) - 60mn", label: "Promenade(s) - 60mn" },
    { value: "Visite(s)", label: "Visite(s)" },
    { value: "Promenade(s) & visite(s", label: "Promenade(s) & visite(s)"},
    { value: "Forfait(s) - 1 semaine", label: "Forfait(s) - 1 semaine" },
    { value: "Forfait(s) - 2 semaines", label: "Forfait(s) - 2 semaines" },
    { value: "Forfait(s) - 1 mois", label: "Forfait(s) - 1 mois" },
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

const EstimateForm = () => {
    
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
    const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zip: "",
        email: "",
        phone: "",
        status: "",
        number: "",
        race: "",
        prestation: "",
        startDate: "",
        endDate: "",
        message: ""
    });

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

    const handleSubmit = async (event) => {

        event.preventDefault();
        try {
            const response = await axios.post(`${backendUrl}/estimate`, {...formData, recaptchaValue});
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
                    <RadioInput name="status" label="Vous êtes :" options={status} onChange={handleChange} />
                    <NumberInput name="number" label="Nombre d'animaux à garder" placeholder="1, 5, 10 .." onChange={handleChange} />
                </TwoWrapper>
                <TwoWrapper>
                    <SelectInput name="race" label="Le type d'animal concerné" placeholder="Choisissez ici" options={race} onChange={handleChange} />
                    <SelectInput name="prestation" label="Votre prestation choisie" placeholder="Choisissez ici" options={prestation} onChange={handleChange} />
                </TwoWrapper>
                <TwoWrapper>
                    <DateInput name="startDate" label="Début de garde" onChange={handleChange} />
                    <DateInput name="endDate" label="Fin de garde" onChange={handleChange} />
                </TwoWrapper>
                <OneWrapper>
                    <TextArea name="message" label="Votre message" placeholder="Vous pouvez écrire votre message ici .." onChange={handleChange} />
                </OneWrapper>
                <ConfirmWrapper>
                    <ReCAPTCHA
                        sitekey={recaptchaKey}
                        onChange={handleRecaptchaChange}
                    />
                    <Validate text="Demander un devis" type="submit" disabled={!recaptchaValue}/>
                </ConfirmWrapper>
            </FormWrapper>
        </Container>
    );
};

export default EstimateForm;
