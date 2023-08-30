import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    @media (max-width: 375px) {
        width: 70%;
    }
`

const StyledLabel = styled.label`
    font-size: 18px;
    cursor: pointer;
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`

const StyledRadio = styled.input`
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid #999;
    transition: 0.2s all linear;
    margin-right: 7px;
    position: relative;
    top: 3px;
    cursor: pointer;
    &&:checked {
        background-color: black;
    }
`

const Radio = ({label, name, options, onChange}) => {
    return (
        <Container>
            <StyledLabel htmlFor={name} >{label}</StyledLabel>
            <Wrapper>
                {options.map((option) => (
                    <div key={option.value}>
                        <StyledRadio type="radio" onChange={onChange} id={`${name}-${option.value}`} name={name} value={option.value} />
                        <StyledLabel htmlFor={`${name}-${option.value}`}>{option.label}</StyledLabel>
                    </div>
                ))}
            </Wrapper>
        </Container>
    );
};

export default Radio;
