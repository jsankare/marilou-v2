import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
    padding: 25px;
    border: solid 2px black;
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const FeatureWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`


const Heading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

const Name = styled.h4`
    font-size: 20px;
    font-weight: 600;
`

const Price = styled.h3`
    font-size: 36px;
`

const CTAWrapper = styled(Link)`
    transition: 0.3s ease-in-out;
    text-align: center;
    width: 100%;
    background-color: black;
    padding: 10px 0;
    text-decoration: none;
    &&:hover {
        transform: scale(1.05);
    }
`

const CTA = styled(Link)`
    text-align: center;
    text-decoration: none;
    color: white;
`

const Pack = ({ name, price, features, pet }) => {
  return (
    <Container>
        <Heading>
            <Name> {name} </Name>
            {pet && <Price> {pet.cost} </Price>}
            {!pet && <Price> {price} </Price>}
        </Heading>
        <FeatureWrapper>
            {features && features.map((feature, index) => (
            <div key={index}>{feature}</div>
            ))}
        </FeatureWrapper>
        <CTAWrapper to="/estimate">
            <CTA to="/estimate" >Demander un devis</CTA>
        </CTAWrapper>
    </Container>
  );
};

export default Pack;
