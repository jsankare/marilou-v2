import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const StyledLabel = styled.label``

const StyledSelect = styled.select``

const Select = ({label, name, placeholder, options}) => {
    return (
        <Container>
            <StyledLabel  for={name} >{label}</StyledLabel>
            <StyledSelect type="select" id={name} name={name} placeholder={placeholder}>
                <option value=""> {placeholder} </option>
                {options.map((option) => (
                    <option key={option.value}  value={option.value}>
                        {option.label}
                    </option>
                ))}
            </StyledSelect>
        </Container>
    );
};

export default Select;
