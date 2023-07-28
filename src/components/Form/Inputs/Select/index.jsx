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

const StyledSelect = styled.select`
    padding: 5px;
    font-size: 18px;
`

const StyledOption = styled.option``

const Select = ({label, name, placeholder, options}) => {
    return (
        <Container>
            <StyledLabel  for={name} >{label}</StyledLabel>
            <StyledSelect type="select" id={name} name={name} placeholder={placeholder}>
                <StyledOption value=""> {placeholder} </StyledOption>
                {options.map((option) => (
                    <StyledOption key={option.value}  value={option.value}>
                        {option.label}
                    </StyledOption>
                ))}
            </StyledSelect>
        </Container>
    );
};

export default Select;