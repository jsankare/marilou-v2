import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    @media screen and (max-width: 768px) {
        text-align: center;
    }
`

const StyledLink = styled.button`
    padding: 15px 25px;
    border-radius: 5px;
    text-decoration: none;
    background-color: #538a82;
    color: black;
    font-weight: 800;
`

const Validate = ({text}) => {
    return (
        <Container>
            <StyledLink> {text} </StyledLink>
        </Container>
    );
};

export default Validate;
