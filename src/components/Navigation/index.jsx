import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import logo from '../../assets/marilou-logo-cropped.png';
import Link from 'next/link';
import Image from 'next/image';

const BannerContainer = styled.div`
    color: black;
    text-align: right;
    padding: 5px 50px;
    @media screen and (max-width: 425px) {
        padding: 5px 20px;
    }
`;

const Desktop = styled.div`
    justify-content: space-between;
    align-items: center;
    display: flex;
    @media screen and (max-width: 1024px) {
        display: none;
    }
`

const Mobile = styled.div`
    display: none;
    position: relative;
    @media screen and (max-width: 1024px) {
        justify-content: space-between;
        display: flex;
    }
`

const Burger = styled.img`
    width: 100%;
    max-width: 50px;
    cursor: pointer;
`

const Logo = styled(Image)`
    width: 68px;
    height: 62px;
`;

const LinkContainer = styled.ul`
    display: flex;
    gap: 50px;
    transition: 0.1s;
    opacity: 1;
    list-style: none;
    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
`;

const Menu = styled.div`
  display: none;
  list-style: none;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 100%;
  background-color: white;
  right: 5px;
  padding: 10px;
  z-index: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  @media (max-width: 1024px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
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

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if(menuRef.current && !menuRef.current.contains(event.target))
            setIsMenuOpen(false);
        }

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        }

    })

    return (
        <BannerContainer>
            <Desktop>
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
                        <StyledLink href="/estimate">Devis</StyledLink>
                    </li>
                </LinkContainer>
                <LinkContainer>
                <StyledLink href="/#contact">Contact</StyledLink>
                </LinkContainer>
            </Desktop>
            <Mobile>
                <StyledLink href="/"><Logo src={logo} alt="Marilou logo" /></StyledLink>
                <Burger src='/images/menu.png' onClick={toggleMenu} ref={menuRef} />
                <Menu isOpen={isMenuOpen} >
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
                        <StyledLink href="/estimate">Devis</StyledLink>
                    </li>
                    <li>
                        <StyledLink href="/#contact">Contact</StyledLink>
                    </li>
                </Menu>
            </Mobile>
        </BannerContainer>
    );
  }
  
  export default Navigation;
