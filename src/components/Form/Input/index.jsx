import React from "react";
import styled from "styled-components";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const StyledInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
`

const StyledLabel = styled.label``

const StyledTextarea = styled.textarea``

const StyledSelect = styled.select``

const StyledRadioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`

const Input = ({ name, placeholder, type, label, anchor, id, options }) => {
  return (
    <Container>
      <StyledLabel htmlFor={anchor}>{label}</StyledLabel>
      {type === "textarea" ? (
        <StyledTextarea placeholder={placeholder} name={name} id={id} />
      ) : type === "select" ? (
        <StyledSelect name={name} id={id}>
          <option value="" disabled selected hidden>
          {placeholder}
          </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
      ) : type === "radio" ? (
        <StyledRadioWrapper>
          {options.map((option, index) => (
            <div key={index}>
              <StyledLabel>
                <StyledInput
                  type="radio"
                  name={name}
                  value={option}
                  id={`${id}-${index}`}
                />
                {option}
              </StyledLabel>
            </div>
          ))}
        </StyledRadioWrapper>
      ) : (
        <StyledInput
          placeholder={placeholder}
          type={type}
          name={name}
          id={id}
        />
      )}
      
    </Container>
  );
};

export default Input;
