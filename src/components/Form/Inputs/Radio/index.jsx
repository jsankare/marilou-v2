import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const StyledLabel = styled.label``

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`

const StyledRadio = styled.input``

const Radio = ({label, name, options}) => {
    return (
        <Container>
            <StyledLabel  for={name} >{label}</StyledLabel>
            <Wrapper>
                {options.map((option) => (
                    <div key={option.value}>
                        <StyledRadio type="radio" id={`${name}-${option.value}`} name={name} value={option.value} />
                        <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
                    </div>
                ))}
            </Wrapper>
        </Container>
    );
};

export default Radio;
