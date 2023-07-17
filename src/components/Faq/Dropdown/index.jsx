import React, { useState } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Question = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 600;
`

const Divider = styled.div`
    height: 1px;
    background-color: black;
    width: 100%;
`

const Title = styled.h4``

const Answer = styled.div`
    max-width: 90%;
    font-size: 18px;
`

const Dropdown = ({title, answer}) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Container>
            <Question onClick={toggleDropdown} >
            <Title> {title} </Title>
            <FontAwesomeIcon icon={faChevronDown} />
            </Question>
            {isOpen && <Answer> {answer} </Answer> }
            <Divider />
        </Container>
    );
};

export default Dropdown;
