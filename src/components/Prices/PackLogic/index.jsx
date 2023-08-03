import React, { useState } from "react";
import styled from "styled-components";
import Pack from "../Pack";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
`

const Button = styled.a`
    cursor: pointer;
    padding: 10px 15px;
    font-size: 20px;
    box-shadow: ${(props) => (props.active ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : "none")};
    background-color: ${(props) => (props.active ? "#A2C1BC" : "transparent")};
    border: ${(props) => (props.active ? "1px solid #000" : "none")};
    border-radius: ${(props) => (props.active ? "25px" : "none")};
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

const Title = styled.h2`
    font-size: 28px;
    color: #356d64;
    font-weight: bold;
`

const Variable = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 600px;
    gap: 5px;
    justify-content: center;
`

const PackLogic = ({ packsData, title }) => {
    const [selectedPack, setSelectedPack] = useState(packsData[0].name);
    const [selectedVariable, setSelectedVariable] = useState(null);
    const [selectedPet, setSelectedPet] = useState(null);

    const [, setSelectedPrice] = useState(null);

    const handlePetClick = (pet) => {
        setSelectedPet(pet);
        setSelectedPrice(pet.cost);
    };

    const handlePackClick = (packName) => {
        setSelectedPack(packName);
        setSelectedVariable(null);
        setSelectedPet(null);
    };

    const handleVariableClick = (variable) => {
        setSelectedVariable(variable);
        setSelectedPet(null);
    };

    const selectedPackData = packsData.find((pack) => pack.name === selectedPack);

    return (
        <Container>
        <Title> {title} </Title>
        <Wrapper>
        <Variable>
            {packsData.map((pack, index) => (
            <Button
                key={index}
                active={selectedPack === pack.name}
                onClick={() => handlePackClick(pack.name)}
            >
                {pack.name}
            </Button>
            ))}
        </Variable>
        {selectedPackData && (
            <>
            {selectedPackData.variable && (
                <Variable>
                {selectedPackData.variable.map((varData, index) => (
                    <Button
                    key={index}
                    active={selectedVariable === varData}
                    onClick={() => handleVariableClick(varData)}
                    >
                    {varData.value}
                    </Button>
                ))}
                </Variable>
            )}
            {selectedVariable && selectedVariable.additional && (
                <Variable>
                {selectedVariable.additional.map((pet, index) => (
                    <Button
                    key={index}
                    active={selectedPet === pet}
                    onClick={() => handlePetClick(pet)}
                    >
                    {pet.number}
                    </Button>
                ))}
                </Variable>
            )}
            <Pack
                name={
                selectedVariable && selectedVariable.value
                    ? selectedVariable.value
                    : selectedPackData.name
                }
                price={
                selectedVariable !== null
                    ? selectedVariable.cost
                    : selectedPackData.price
                }
                time={selectedPackData.time}
                features={selectedPackData.features}
                variable={selectedPackData.variable}
                pet={selectedPet}
            />
            </>
        )}
        </Wrapper>
        </Container>
    );
};

export default PackLogic;
