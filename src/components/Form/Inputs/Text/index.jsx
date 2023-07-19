import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const StyledLabel = styled.label``

const StyledInput = styled.input``

const Text = ({label, name, placeholder}) => {
    return (
        <Container>
            <StyledLabel  for={name} >{label}</StyledLabel>
            <StyledInput type="text" id={name} name={name} placeholder={placeholder} />
        </Container>
    );
};

export default Text;
