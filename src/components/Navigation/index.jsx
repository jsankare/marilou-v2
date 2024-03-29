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
    display: ${({ isopen }) => (isopen === 'true' ? 'flex' : 'none')};
  }
`;

const StyledLink = styled(Link)`
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

const PrimalStyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    margin: 0 5px;
    font-size: 20px;
    font-weight: 400;
    transition: 0.2s;
    background-color: #538A82;
    padding: 10px 25px;
    border-radius: 15px;
    border: 1px solid black;
    &:hover {
        background-color: #275e55;
        transform: scale(1.05);
    }
`;

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
    
        document.addEventListener('click', handleOutsideClick);
    
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

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
                        <StyledLink href="/gallery">Galerie</StyledLink>
                    </li>
                    <li>
                        <StyledLink href="/prestations">Prestations</StyledLink>
                    </li>
                    <li>
                        <StyledLink href="/#contact">Contact</StyledLink>
                    </li>
                </LinkContainer>
                <LinkContainer>
                <PrimalStyledLink href="/estimate">Devis</PrimalStyledLink>
                </LinkContainer>
            </Desktop>
            <Mobile>
                <StyledLink href="/"><Logo src={logo} alt="Marilou logo" /></StyledLink>
                <Burger src='/images/menu.png' onClick={toggleMenu} />
                <Menu isopen={isMenuOpen.toString()}>
                    <li>
                        <StyledLink href="/" onClick={closeMenu}>Accueil</StyledLink>
                    </li>
                    <li>
                        <StyledLink href="/values" onClick={closeMenu}>Nos valeurs</StyledLink>
                    </li>
                    <li>
                        <StyledLink href="/prestations" onClick={closeMenu}>Prestations</StyledLink>
                    </li>
                    <li>
                        <StyledLink href="/gallery" onClick={closeMenu}>Galerie</StyledLink>
                    </li>
                    <li>
                        <StyledLink href="/#contact" onClick={closeMenu}>Contact</StyledLink>
                    </li>
                    <li>
                        <StyledLink href="/estimate" onClick={closeMenu}>Devis</StyledLink>
                    </li>
                </Menu>
            </Mobile>
        </BannerContainer>
    );
  }
  
  export default Navigation;
