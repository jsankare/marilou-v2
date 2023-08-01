import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/marilou-logo-cropped.png';
import Link from 'next/link';
import Image from 'next/image';

const BannerContainer = styled.div`
  color: black;
  text-align: right;
  padding: 5px 50px;
  justify-content: space-between;
  font-family: roboto;
  align-items: center;
  display: flex;
`;

const Logo = styled(Image)`
  width: 68px;
  height: 62px;
`;

const LinkContainer = styled.ul`
  display: flex;
  gap: 50px;
  transition: 0.1s;
  opacity: 1;
`;

const StyledLink = styled(Link)`
  transition: 0.5s;
  text-decoration: none;
  color: black;
  margin: 0 5px;
  font-size: 20px;
  font-weight: 400;
  transition: 0.2s;

  &:hover {
    color: #538A82;
  }
`;

function Banner() {
    return (
      <BannerContainer>
        <StyledLink href="/"><Logo src={logo} alt="Marilou logo" /></StyledLink>
        <LinkContainer>
          <li>
            <StyledLink href="/">Accueil</StyledLink>
          </li>
          <li>
            <StyledLink href="/values">Nos valeurs</StyledLink>
          </li>
          <li>
            <StyledLink href="/prestations">Prestations</StyledLink>
          </li>
          <li>
            <StyledLink href="/#contact">Contact</StyledLink>
          </li>
          <li>
            <StyledLink href="/estimate">Devis</StyledLink>
          </li>
        </LinkContainer>
      </BannerContainer>
    );
  }
  
  export default Banner;
