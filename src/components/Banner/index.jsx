import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/marilou-logo-cropped.png';
import { Link } from 'react-router-dom';

const BannerContainer = styled.div`
  color: black;
  text-align: right;
  padding: 5px 50px;
  justify-content: space-between;
  font-family: roboto;
  align-items: center;
  display: flex;
`;

const Logo = styled.img`
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
        <StyledLink to="/"><Logo src={logo} alt="Marilou logo" /></StyledLink>
        <LinkContainer>
          <li>
            <StyledLink to="/">Accueil</StyledLink>
          </li>
          <li>
            <StyledLink to="/values">Nos valeurs</StyledLink>
          </li>
          <li>
            <StyledLink to="/prestations">Prestations</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact">Contact</StyledLink>
          </li>
        </LinkContainer>
      </BannerContainer>
    );
  }
  
  export default Banner;
