import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/marilou-logo-cropped.png';

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

const Link = styled.a`
  text-decoration: none;
  color: black;
  margin: 0 5px;
  font-size: 20px;
  font-weight: 400;
  transition: 0.2s;

  &:hover {
    color: #4FD6F4;
    font-weight: 800;
  }
`;

function Banner() {
    return (
      <BannerContainer>
        <Logo src={logo} alt="Marilou logo" />
        <LinkContainer>
          <li>
            <Link href="#">Accueil</Link>
          </li>
          <li>
            <Link href="#">Prestations</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </LinkContainer>
      </BannerContainer>
    );
  }
  
  export default Banner;
