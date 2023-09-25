import styled from "styled-components";
import Link from 'next/link';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
    gap: 10px;
    text-align: center;
    position: relative;
`

const Title = styled.h1`
    font-size: 50px;
    z-index: 10;
`

const Subtitle = styled.h2`
    font-size: 30px;
    z-index: 10;
`

const StyledLink = styled(Link)`
    text-decoration: underline;
    color: black;
    margin: 0 5px;
`

const Picture = styled.img`
    position: absolute;
    max-height: 500px;
    height: 100%;
    bottom: 10px;
    left: 10px;
    @media (max-width: 768px) {
        height: 250px;
    }
    @media (max-width: 425px) {
        height: 150px;
        top: auto;
        left: auto;
    }
    @media (max-width: 225px) {
       display: none;
    }
`

export default function Custom404() {
    return (
        <Container>
            <Title>Woof !</Title>
            <Subtitle>La page que vous cherchez n&apos;existe pas, cliquez <StyledLink href="/">ici</StyledLink></Subtitle>
            <Picture src="/images/404_pic.svg" />
        </Container>
        )
    }