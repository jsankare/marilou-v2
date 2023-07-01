import React from "react";
import styled from 'styled-components';
import Dropdown from "../Dropdown";

const Container = styled.section`
    width: 100%;
    max-width: 1200px;
    display: flex;
`

const Heading = styled.div``

const Questions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const data = [
    {
        id: 'FLM1',
        question: 'question1',
        answer: 'answer1'
    },
    {
        id: 'VKI2',
        question: 'question2',
        answer: 'answer2'
    }
]

const Faq = () => {
    return (
        <Container>
            <Heading>
                <p>test</p>
            </Heading>
            <Questions>
                {data.map((dropdown) => (
                    <Dropdown 
                    key={dropdown.id}
                    title={dropdown.question}
                    answer={dropdown.answer}
                    />
                ))}
            </Questions>
        </Container>
    );
};

export default Faq;
