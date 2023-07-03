import React, { useState } from 'react';
import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; 

const ReviewContainer = styled.div`
  position: relative;
  width: 600px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const Title = styled.h2`
  font-size: 30px;
  font-weight: 800;
`

const ReviewContent = styled.div`
  font-size: 26px;
  font-weight: 500;
`

const ReviewAuthor = styled.div`
  font-size: 18px;
`

const Controls = styled.div``

const PreviousButton = styled.button`
  position: absolute;
  left: -90px;
  top: 35%;
`

const NextButton = styled.button`
  position: absolute;
  right: -80px;
  top: 35%;
`

const Review = ({ reviews }) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const prevQuote = () => {
    setCurrentQuoteIndex((prevIndex) => prevIndex - 1);
  };

  const nextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => prevIndex + 1);
  };

  const review = reviews[currentQuoteIndex];

  return (
    <ReviewContainer>
      <Title>Les avis des clients</Title>
      <ReviewContent>{review.quote}</ReviewContent>
      <ReviewAuthor>
        <div>{review.name}</div>
        <div>{review.title}</div>
      </ReviewAuthor>
      <Controls>
        <PreviousButton
          disabled={currentQuoteIndex === 0}
          onClick={prevQuote}
        >
          Précédent
        </PreviousButton>
        <NextButton
          disabled={currentQuoteIndex === reviews.length - 1}
          onClick={nextQuote}
        >
          Suivant
        </NextButton>
      </Controls>
    </ReviewContainer>
  );
};

export default Review;
