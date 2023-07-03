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
`

const PictureWrapper = styled.div`
    width: 100%;
    height: 200px;
    max-width: ${({ flexColumn }) => (flexColumn ? '' : '350px')};
    overflow: hidden;
    position: relative;
`

const Picture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
    filter: brightness(0.7);
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
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
            <PictureWrapper>
                <Picture src={image} alt="Article Image" />
            </PictureWrapper>
            <Content>
                <Title>{title}</Title>
                <Catchphrase>{catchphrase}</Catchphrase>
                <Link href={link} target="_blank" rel="noopener noreferrer">
                   Lire l'article ici<FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </Content>
        </Container>
    );
};

export default BigArticle;
