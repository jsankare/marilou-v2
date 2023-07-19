import React from "react";
import styled from 'styled-components';
import TextInput from '../Inputs/Text';
import SelectInput from '../Inputs/Select';
import RadioInput from "../Inputs/Radio";

const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
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

const ContactForm = () => {
    return (
        <Container>
            <Heading>
                <Title>Me contacter</Title>
            </Heading>
            <Wrapper>
                <TextInput label="Nom" placeholder="Martine" />
                <TextInput label="Prénom" placeholder="Dupuis" />
                <SelectInput label="Choisissez une option" name="options" placeholder="Choose one" options={options} />
                <RadioInput label="Choisissez une option" name="options" placeholder="Choose one" options={options} />
            </Wrapper>
            <ConfirmWrapper>

            </ConfirmWrapper>
        </Container>
    );
};

export default ContactForm;
