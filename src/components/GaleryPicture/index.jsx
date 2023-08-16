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
`

const Delete = styled.div`
    width: 10px;
    height: 10px;
    background-color: red;
`

const GaleryImage = ({image, caption}) => {
    return (
        <Container>
            <Wrapper>
                <StyledImage src={image} />
                <Caption>{caption}</Caption>
            </Wrapper>
            <Delete />
        </Container>
    );
};

export default GaleryImage;
