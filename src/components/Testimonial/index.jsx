import React from 'react';
import styled from 'styled-components';
import Review from './Review';

const Container = styled.section`
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
  `

const Testimonial = () => {

  const reviews = [
    {
      quote: `Merci à Marilou pour son sérieux, son professionnalisme, nous avons eu besoin de ses services un week-end et tout à été très bien pour nos deux whippets . Merci encore et certainement à très bientôt.`,
      name: "Cathy & Sylvain",
      picture: ``,
    },
    {
        quote: `Je suis plus que satisfaite de Marilou qui est entièrement disponible et dévouée pour mes loulous. Elle est surtout très douce et très professionnelle. Je la remercie grandement pour ce qu’elle fait.`,
        name: `Adeline Colombier`,
        picture: ``,
    },
    {
      quote: `Excellente prestation. Marilou est une personne de confiance et sympathique, mon chien était très heureux, on recommande !`,
      name: `Mme Delachanal`,
      picture: ``,
    },
    {
      quote: `Marilou prend soin de mon chat à chaque fois que je pars en vacances, il est très bien choyé et heureux de la voir arriver pour profiter de ses câlins et de sa dose de croquettes. Je recommande vivement Marilou !`,
      name: `Mr Pinna Stéphane`,
      picture: ``,
    },
  ];

  return (
    <Container>
      <Review reviews={reviews} />
    </Container>
  );
};

export default Testimonial;
