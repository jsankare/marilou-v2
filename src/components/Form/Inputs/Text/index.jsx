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

const StyledInput = styled.input`
    padding: 5px;
    font-size: 18px;
`

const Text = (props) => {
    const {label, name, placeholder} = props
    return (
        <Container>
            <StyledLabel  htmlFor={name} >{label}</StyledLabel>
            <StyledInput {...props} id={name} name={name} placeholder={placeholder} />
        </Container>
    );
};

export default Text;
