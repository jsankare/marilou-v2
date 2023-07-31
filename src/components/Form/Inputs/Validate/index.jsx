import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
`

const Text = styled.a`
    padding: 15px;
    border-radius: 5px;
    text-decoration: none;
    background-color: #538a82;
    color: black;
`

const Validate = ({text}) => {
    return (
        <Container>
            <Text href="" > {text} </Text>
        </Container>
    );
};

export default Validate;
