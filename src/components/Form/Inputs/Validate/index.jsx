import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    transition: 0.2s ease-in-out;
    &&:hover{
        transform: scale(1.1);
    }
`

const Text = styled.a`
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
            <Text href="" > {text} </Text>
        </Container>
    );
};

export default Validate;
