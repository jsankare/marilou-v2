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
    flex-direction: row-reverse;
    gap: 10px;
    align-items: center;
    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
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
        Prénom: "",
        Nom: "",
        Adresse: "",
        Ville: "",
        Zip: "",
        Email: "",
        Téléphone: "",
        Statut: "",
        Nombre: "",
        Race: "",
        Prestation: "",
        Début: "",
        Fin: "",
        Message: ""
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
            const response = await axios.post(`${backendUrl}/estimate`, formData);
            console.log("Form data sent:", response.data);
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
                    <TextInput name="Prénom" label="Prénom" placeholder="Martine" onChange={handleChange} />
                    <TextInput name="Nom" label="Nom" placeholder="Dupuis" onChange={handleChange} />
                </TwoWrapper>
                <ThreeWrapper>
                    <TextInput name="Adresse" label="Adresse" placeholder="5 rue Montaigne" onChange={handleChange} />
                    <TextInput name="Ville" label="Ville" placeholder="Paris" onChange={handleChange} />
                    <TextInput name="Zip" label="Code postal" placeholder="75015" onChange={handleChange} />
                </ThreeWrapper>
                <TwoWrapper>
                    <TextInput name="Email" label="Email" placeholder="exemple@mail.com" onChange={handleChange} />
                    <TextInput name="Téléphone" label="Téléphone" placeholder="0611121314" onChange={handleChange} />
                    <RadioInput name="Statut" label="Vous êtes :" options={status} onChange={handleChange} />
                    <NumberInput name="Nombre" label="Nombre d'animaux à garder" placeholder="1, 5, 10 .." onChange={handleChange} />
                </TwoWrapper>
                <TwoWrapper>
                    <SelectInput name="Race" label="Le type d'animal concerné" placeholder="Choisissez ici" options={race} onChange={handleChange} />
                    <SelectInput name="Prestation" label="Votre prestation choisie" placeholder="Choisissez ici" options={prestation} onChange={handleChange} />
                </TwoWrapper>
                <TwoWrapper>
                    <DateInput name="Début" label="Début de garde" onChange={handleChange} />
                    <DateInput name="Fin" label="Fin de garde" onChange={handleChange} />
                </TwoWrapper>
                <OneWrapper>
                    <TextArea name="Message" label="Votre message" placeholder="Vous pouvez écrire votre message ici .." onChange={handleChange} />
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
