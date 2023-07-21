import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`

const StyledLabel = styled.label`
    font-size: 18px;
`

const StyledArea = styled.textarea`
    font-size: 18px;
    padding: 10px;
    min-height: 100px;
    height: fit-content;
`

const TextArea = ({label, name, placeholder}) => {
    return (
        <Container>
            <StyledLabel  for={name} >{label}</StyledLabel>
            <StyledArea id={name} name={name} placeholder={placeholder} />
        </Container>
    );
};

export default TextArea;
