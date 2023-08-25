import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
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

const Delete = styled.button`
    width: 100%;
    max-width: fit-content;
`

const GaleryImage = ({ image, caption, token, onDelete }) => {
    return (
        <Container>
            <Wrapper>
                <StyledImage src={image} />
                <Caption>{caption}</Caption>
            </Wrapper>
            {
                token && (
                    <Delete onClick={() => onDelete(image._id)}>Supprimer</Delete>
                )
            }
        </Container>
    );
};

export default GaleryImage;
