import React, { useState } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    width: 100%;
`

const Question = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
`

const Title = styled.h4``

const Answer = styled.div``

const Dropdown = ({title, answer}) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Container>
            <Question>
            <Title onClick={toggleDropdown} > {title} </Title>
            <FontAwesomeIcon icon={faChevronDown} />
            </Question>
            {isOpen && <Answer> {answer} </Answer> }
        </Container>
    );
};

export default Dropdown;
