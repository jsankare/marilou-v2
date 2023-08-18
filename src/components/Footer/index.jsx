import Link from "next/link";
import React from "react";
import styled from 'styled-components';

const Container = styled.section`
    width: 100%;
    max-width: 1800px;
    padding: 30px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 50px;
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 425px) {
        flex-direction: column;
        gap: 15px;
    }
`

const Socials = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 425px) {
        display: flex;
    }
`

const Icon = styled.img`
    width: 100%;
    max-width: 30px;
`

const Logo = styled.img`
    width: 100%;
    max-width: 75px;
`

const Sitemap = styled.div`
    display: flex;
    gap: 15px;
    @media (max-width: 1024px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

const Rights = styled.div``

const Maker = styled.p`
    text-align: center;
    margin-bottom: 5px;
` 

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`

const Dividor = styled.div`
    height: 1px;
    width: 100%;
    background-color: black;
    margin: 0 auto;
    @media (max-width:1250px) {
        width: 90%;
    }

`


const Footer = () => {
    return (
        <Container>
            <Content>
                <StyledLink href="/" ><Logo src="/images/logo.png" /></StyledLink>
                <Sitemap>
                    <StyledLink href="/" >Accueil</StyledLink>
                    <StyledLink href="/prestations" >Prestations</StyledLink>
                    <StyledLink href="/values" >Nos valeurs</StyledLink>
                    <StyledLink href="/gallery" >Galerie</StyledLink>
                    <StyledLink href="/estimate" >Devis</StyledLink>
                    <StyledLink href="/#contact" >Contact</StyledLink>
                    <StyledLink href="/login">Connexion</StyledLink>
                    <StyledLink href="/legal" >Conditions d&apos;utilisation</StyledLink>
                </Sitemap>
                <Socials>
                    <StyledLink href="tel:0674802188" ><Icon src="/images/phone.png" /></StyledLink>
                    <StyledLink href="mailto:Mariloubaty@outlook.fr" ><Icon src="/images/mail.png" /></StyledLink>
                    <StyledLink href="https://www.instagram.com/marilou_pet_sitting/" target="blank" ><Icon src="/images/instagram.png" /></StyledLink>
                    <StyledLink href="https://www.facebook.com/profile.php?id=100090481339100&mibextid=LQQJ4d" target="blank" ><Icon src="/images/facebook.png" /></StyledLink>
                </Socials>
            </Content>
            <Dividor />
            <Rights>
                <Maker>Création <StyledLink href="https://www.jsankare.dev" target="blank" >Jordan Sankare</StyledLink></Maker>
            </Rights>
        </Container>
    );
};

export default Footer;
