import React from "react";
import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

const Title = styled.h2`
    font-size: 36px;
    font-weight: 800;
`

const Content = styled.p`
    font-size: 18px;
    white-space: pre-line;
`

const BoldContent = styled.p`
    font-size: 18px;
    font-weight: bold;
`

const Conditions = ({ title, content, bold }) => {
    return (
        <Container>
            <Title> {title} </Title>
            {bold && <BoldContent>{bold}</BoldContent>}
            {content && <Content>{content}</Content>}
        </Container>
    );
};

export default Conditions;
