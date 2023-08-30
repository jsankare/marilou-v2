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

const Number = ({label, name, placeholder, onChange}) => {
    return (
        <Container>
            <StyledLabel  htmlFor={name} >{label}</StyledLabel>
            <StyledInput onChange={onChange} type="number" id={name} name={name} placeholder={placeholder} min="1" max="500" />
        </Container>
    );
};

export default Number;
