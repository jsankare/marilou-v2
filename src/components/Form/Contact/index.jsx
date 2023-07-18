import React from "react";
import styled from 'styled-components';
import Input from "../Input";

const data = [
    {
        name: "civil",
        placeholder: "Choisissez",
        type: "radio",
        label: "Civilité",
        anchor: "civil",
        options: ["Monsieur", "Madame", "Ne se prononce pas"],
        id: 1,
    },
    {
        name: "name",
        placeholder: "Yannick",
        type: "text",
        label: "Prénom",
        anchor: "name",
        id: 1,
    },
    {
        name: "surname",
        placeholder: "Dupuis",
        type: "text",
        label: "Nom",
        anchor: "surname",
        id: 2,
    },
    {
        name: "mail",
        placeholder: "mon.adresse@mail.fr",
        type: "email",
        label: "Email",
        anchor: "mail",
        id: 3,
    },
    {
        name: "phone",
        placeholder: "0612131415",
        type: "tel",
        label: "Numéro de téléphone",
        anchor: "phone",
        id: 4,
    },
    {
        name: "list",
        placeholder: "Selectionnez ici",
        type: "select",
        label: "La raison de votre message",
        anchor: "list",
        id: 6,
        options: ["Demande d'information", "Erreur sur le site", "Avis de client"],
      },
]

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

const Wrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    max-width: 800px;
`

const ConfirmWrapper = styled.div``

const Title = styled.h2`
    font-size: 30px;
    color: #538A82;
    font-weight: bold;
`

const Validation = styled.input``

const StyledSubmit = styled.input``

const ContactForm = () => {
    return (
        <Container>
            <Heading>
                <Title>Me contacter</Title>
            </Heading>
            <Wrapper>
                {data.map((input) => (
                    <Input 
                        name={input.name}
                        placeholder={input.placeholder}
                        type={input.type}
                        label={input.label}
                        anchor={input.anchor}
                        options={input.options}
                        id={input.id}
                    />
                ))}
            </Wrapper>
            <ConfirmWrapper>
                <Validation type="checkbox" label="test" />
                <StyledSubmit type="submit" value="Envoyer" />
            </ConfirmWrapper>
        </Container>
    );
};

export default ContactForm;
