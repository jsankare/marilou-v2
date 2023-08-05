import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${({ flexColumn }) => (flexColumn ? 'column' : 'row')};
    gap: 20px;
    align-items: center;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    position: relative;
    @media (max-width: 768px) {
        height: auto;
        width: auto;
        color: white;
    }
`

const Picture = styled.img`
    width: 100%;
    height: 100%;
    max-height: 200px;
    max-width: 400px;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
    filter: brightness(0.7);
    @media (max-width: 1260px) {
        max-width: 300px;
    }
    @media (max-width: 1024px) {
        max-height: none;
        height: 260px;
    }
    @media (max-width: 768px) {
        position: absolute;
        max-width: none;
        height: 100%;
        width: 100%;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    height: auto;
    @media (max-width: 768px) {
        z-index: 1000;
    }
`

const Title = styled.h3`
    font-size: 26px;
    font-weight: 600;
`

const Catchphrase = styled.p``

const Link = styled.a`
    display: flex;
    gap: 10px;
    color: #478079;
`

const BigArticle = ({ image, title, catchphrase, link, flexColumn }) => {
    return (
        <Container flexColumn={flexColumn}>
            <Picture src={image} alt="Article Image" />
            <Content>
                <Title>{title}</Title>
                <Catchphrase>{catchphrase}</Catchphrase>
                <Link href={link} target="_blank" rel="noopener noreferrer">
                   Lire l&apos;article ici<FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </Content>
        </Container>
    );
};

export default BigArticle;
