import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    gap: 20px;
    width: 100%;
    height: 150px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    &:hover {
        > img {
            transform: scale(1.2);
        }
    }
`

const Background = styled.img`
    width: 100%;
    position: absolute;
    z-index: -1000;
    transition: transform 0.3s ease-in-out;
    filter: brightness(0.6);
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    color: white;
`

const Title = styled.h3`
    font-size: 26px;
    font-weight: 600;
`

const Catchphrase = styled.p``

const Link = styled.a`
    width: 100%;
    color: white;
    display: flex;
    gap: 10px;
`

const SmallArticle = ( {image, title, catchphrase, link} ) => {
    return (
        <Container>
            <Background src={image} />
            <Content>
            <Title> {title} </Title>
            <Catchphrase> {catchphrase} </Catchphrase>
            <Link href={link} target="blank" > Lire l'article ici <FontAwesomeIcon icon={faChevronRight} /> </Link>
            </Content>
        </Container>
    );
};

export default SmallArticle;
