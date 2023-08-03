import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; 

const ReviewContainer = styled.div`
    position: relative;
    width: 600px;
    height: 250px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 25px;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media (max-width: 1024px) {
        width: 400px;
    }
    @media (max-width: 768px) {
        width: auto;
    }
`

const Title = styled.h2`
    font-size: 30px;
    color: #538A82;
    font-weight: bold;
`

const ReviewContent = styled.div`
    font-size: 26px;
    font-weight: 500;
    @media (max-width: 1024px) {
        font-size: 18px;
    }
`

const ReviewAuthor = styled.div`
    font-size: 18px;
    @media (max-width: 1024px) {
        font-size: 14px;
    }
`

const Controls = styled.div``

const PreviousButton = styled.a`
    position: absolute;
    left: -90px;
    top: 35%;
    cursor: pointer;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media (max-width: 1024px) {
        left: -50px;
    }
`

const NextButton = styled.a`
    position: absolute;
    right: -80px;
    top: 35%;
    cursor: pointer;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media (max-width: 1024px) {
        right: -50px;
    }
`

const Review = ({ reviews }) => {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    const prevQuote = () => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };

    const nextQuote = () => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    };

    const review = reviews[currentQuoteIndex];

    return (
        <ReviewContainer>
        <Title>Les avis des clients</Title>
        <ReviewContent>&apos;{review.quote}&apos;</ReviewContent>
        <ReviewAuthor>
            <div>- {review.name}</div>
        </ReviewAuthor>
        <Controls>
            <PreviousButton
            disabled={currentQuoteIndex === 0}
            onClick={prevQuote}
            >
            <FontAwesomeIcon icon={faChevronLeft} size='2x' />
            </PreviousButton>
            <NextButton
            disabled={currentQuoteIndex === reviews.length - 1}
            onClick={nextQuote}
            >
            <FontAwesomeIcon icon={faChevronRight} size='2x' />
            </NextButton>
        </Controls>
        </ReviewContainer>
    );
};

export default Review;
