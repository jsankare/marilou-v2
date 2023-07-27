import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pack from "../Pack";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

const SelectWrapper = styled.div``;

const Button = styled.a`
  cursor: pointer;
  padding: 10px;
  background-color: ${(props) => (props.active ? "#ccc" : "transparent")};
  border: ${(props) => (props.active ? "1px solid #000" : "none")};
`;

const Title = styled.h2`
  font-size: 28px;
  color: #356d64;
  font-weight: bold;
`;

const Variable = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 600px;
  gap: 5px;
  justify-content: center;

  button {
    cursor: pointer;
    padding: 10px;
    background-color: ${(props) => (props.active ? "#ccc" : "transparent")};
    border: ${(props) => (props.active ? "1px solid #000" : "none")};
  }
`;

const PackLogic = ({ packsData, title }) => {
  const [selectedPack, setSelectedPack] = useState(packsData[0].name);
  const [selectedVariable, setSelectedVariable] = useState(null);
  const [selectedPet, setSelectedPet] = useState(null);

  const [selectedPrice, setSelectedPrice] = useState(null);

  useEffect(() => {
    // Set the default selected price when a new variable is selected
    if (selectedVariable !== null) {
      setSelectedPrice(selectedVariable.cost);
    }
  }, [selectedVariable]);

  const handlePetClick = (pet) => {
    setSelectedPet(pet);
    // Set the selected price when a new pet is selected
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
      <SelectWrapper>
        {packsData.map((pack, index) => (
          <Button
            key={index}
            active={selectedPack === pack.name}
            onClick={() => handlePackClick(pack.name)}
          >
            {pack.name}
          </Button>
        ))}
      </SelectWrapper>
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
    </Container>
  );
};

export default PackLogic;
