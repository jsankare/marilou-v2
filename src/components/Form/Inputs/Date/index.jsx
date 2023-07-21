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

const Date = ({label, name}) => {
    return (
        <Container>
            <StyledLabel  for={name} >{label}</StyledLabel>
            <StyledInput type="date" id={name} name={name} />
        </Container>
    );
};

export default Date;
