import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    @media screen and (max-width: 768px) {
        text-align: center;
    }
`

const StyledButton = styled.button`
    padding: 15px 25px;
    border-radius: 5px;
    text-decoration: none;
    background-color: #538a82;
    color: black;
    font-weight: 800;
`

const Validate = ({text, onClick, type}) => {
    return (
        <Container>
            <StyledButton type={type} onClick={onClick}> {text} </StyledButton>
        </Container>
    );
};

export default Validate;
