import React from "react";
import styled from 'styled-components';
import Input from "../Input";

const data = [
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
        name: "reason",
        placeholder: "",
        type: "text-area",
        label: "text",
        anchor: "reason",
        id: 5,
    },
    {
        name: "Liste",
        type: "select",
        label: "Select Input",
        anchor: "select",
        id: 6,
        options: ["Option 1", "Option 2", "Option 3"],
      },
      {
        name: "radioInput",
        type: "radio",
        label: "Radio Input",
        anchor: "radio",
        id: 7,
        options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 2", "Option 3", "Option 4"],
      }
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

const Title = styled.h3``

const Subtext = styled.h4``

const ContactForm = () => {
    return (
        <Container>
            <Heading>
                <Title>Me contacter</Title>
                <Subtext>Sous-text</Subtext>
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
        </Container>
    );
};

export default ContactForm;
