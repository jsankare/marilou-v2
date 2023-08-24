import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
`

const Caption = styled.p`
    position: absolute;
    top: 10%;
    font-size: 20px;
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 200px;
    height: 200px;
    overflow: hidden;
    object-fit: contain;
`

const GaleryImage = ({image, caption, id, onDelete}) => {
    return (
        <Container>
            <Wrapper>
                <StyledImage src={image} />
                <Caption>{caption}</Caption>
            </Wrapper>
            <button onClick={() => onDelete(id)}>Supprimer</button>
        </Container>
    );
};

export default GaleryImage;
