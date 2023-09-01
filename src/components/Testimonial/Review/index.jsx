import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; 

const ReviewContainer = styled.div`
    position: relative;
    width: 600px;
    height: auto;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 25px;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    align-items: center;
    @media (max-width: 1024px) {
        width: 400px;
        height: auto;
    }
    @media (max-width: 768px) {
        width: auto;
        margin: 0 auto;
    }
`

const Title = styled.h2`
    font-size: 30px;
    color: #538A82;
    font-weight: bold;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

const TestimonialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const ReviewContent = styled.p`
    font-size: 26px;
    font-weight: 500;
    @media (max-width: 1024px) {
        font-size: 18px;
    }
`

const ReviewAuthor = styled.span`
    font-size: 18px;
    @media (max-width: 1024px) {
        font-size: 14px;
    }
`

const PreviousButton = styled.button`
    cursor: pointer;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: white;
    border: none;
`

const NextButton = styled.button`
    cursor: pointer;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: white;
    border: none;
`

const DeleteButton = styled.button`
    width: 100%;
    max-width: fit-content;
    padding: 10px;
    border-radius: 5px 10px;
    font-size: 16px;
    background-color: #538a82;
`

const Review = ({ reviews, onDelete, token }) => {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    if (!reviews || reviews.lenght === 0) {
        return <div>No reviews Available</div>
    }

    const prevQuote = () => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };

    const nextQuote = () => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    };

    const review = reviews[currentQuoteIndex];

    if (!review) {
        return <div>No review available.</div>;
    }

    return (
        <ReviewContainer>
            <Title>Les avis des clients</Title>
            <Wrapper>
                <PreviousButton
                    disabled={currentQuoteIndex === 0}
                    onClick={prevQuote}
                >
                <FontAwesomeIcon icon={faChevronLeft} size='2x' />
                </PreviousButton>
                <TestimonialWrapper>
                    <ReviewContent>	&quot;{review.quote}&quot;</ReviewContent>
                    <ReviewAuthor>- {review.name}</ReviewAuthor>
                </TestimonialWrapper>
                <NextButton
                disabled={currentQuoteIndex === reviews.length - 1}
                onClick={nextQuote}
                >
                <FontAwesomeIcon icon={faChevronRight} size='2x' />
                </NextButton>
            </Wrapper>
            {
                token && (
                    <DeleteButton onClick={() => onDelete(review._id)}>Supprimer</DeleteButton>
                )
            }
        </ReviewContainer>
    );
};

export default Review;
