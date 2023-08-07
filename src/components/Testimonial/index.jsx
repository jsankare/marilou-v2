import React from 'react';
import styled from 'styled-components';
import Review from './Review';

const Container = styled.section`
    width: 80%;
    max-width: auto;
    margin: 0 auto;
    @media (max-width: 375px) {
        width: 70%;
        margin: 0 auto;
    }
  `

const Testimonial = () => {

  const reviews = [
    {
      quote: `Merci à Marilou pour son sérieux, son professionnalisme, nous avons eu besoin de ses services un week-end et tout a été très bien pour nos deux whippets . Merci encore et certainement à très bientôt.`,
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
      name: `M. Pinna Stéphane`,
      picture: ``,
    },
    {
      quote: `J'ai employé marilou pour le service de remplacement élevage au mois de juillet. Marilou à été très à l'écoute de mes conseils, n'hésitait pas à me contacter pour certains conseils, ou observation durant le séjour. Ce qui m'a rassurée et permise de partir sereinement. Elle s'est adaptée au rhytme que j'avais avec mes loulous afin de ne pas les perturber. Je la recommande donc si vous avez besoins de vous absenter pour des expositions ou profiter de quelques moments en famille.`,
      name: `Élevage Mme D’hayer`,
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
