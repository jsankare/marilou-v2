import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${({ flexDirection }) => (flexDirection ? 'column' : 'row')};
    gap: 20px;
    align-items: center;
    overflow: hidden;
    &:hover {
        ${Picture} {
            transform: scale(1.2);
        }
    }
`

const PictureWrapper = styled.div``

const Picture = styled.img`
    width: 100%;
    transition: transform 0.3s ease-in-out;
`

const Content = styled.div``

const Title = styled.h3``

const Catchphrase = styled.p`
    
`

const Link = styled.a``

const BigArticle = ( {image, title, catchphrase, link, flexDirection} ) => {
    return (
        <Container flexDirection={flexDirection} >
            <PictureWrapper>
                <Picture src={image} />
            </PictureWrapper>
            <Content>
                <Title> {title} </Title>
                <Catchphrase> {catchphrase} </Catchphrase>
                <Link href={link} target="blank" > {link} <FontAwesomeIcon icon={faChevronRight} /> </Link>
            </Content>
        </Container>
    );
};

export default BigArticle;
