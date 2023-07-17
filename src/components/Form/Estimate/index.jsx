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
        label: "Téléphone",
        anchor: "phone",
        id: 4,
    },
    {
        name: "select",
        placeholder: "Choisissez une option",
        type: "select",
        label: "Choix select ici",
        anchor: "select",
        options: ["test", "noix", "foudre"],
        id: 5,
    },
    {
        name: "phone",
        placeholder: "0612131415",
        type: "tel",
        label: "Téléphone",
        anchor: "phone",
        id: 6,
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

const Title = styled.h3``

const Subtext = styled.h4``

const EstimateForm = () => {
    return (
        <Container>
            <Heading>
                <Title>Demander un devis</Title>
                <Subtext>devis devis devis</Subtext>
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

export default EstimateForm;
