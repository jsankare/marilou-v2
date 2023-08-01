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
`

const Informations = styled.div``

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const Socials = styled.div`
    display: flex;
    gap: 10px;
`

const ContactTitle = styled.h4``

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
    flex-direction: column;
    gap: 15px;
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
                <Informations>
                    <StyledLink href="/" ><Logo src="/images/logo.png" /></StyledLink>
                    <Contact>
                        <ContactTitle>Contact :</ContactTitle>
                        <Socials>
                            <StyledLink href="tel:0674802188" ><Icon src="/images/phone.png" /></StyledLink>
                            <StyledLink href="mailto:Mariloubaty@outlook.fr" ><Icon src="/images/mail.png" /></StyledLink>
                            <StyledLink href="https://www.instagram.com/marilou_pet_sitting/" target="blank" ><Icon src="/images/instagram.png" /></StyledLink>
                            <StyledLink href="https://www.facebook.com/profile.php?id=100090481339100&mibextid=LQQJ4d" target="blank" ><Icon src="/images/facebook.png" /></StyledLink>
                        </Socials>
                    </Contact>
                </Informations>
                <Sitemap>
                    <StyledLink href="/" >Accueil</StyledLink>
                    <StyledLink href="/prestations" >Prestations</StyledLink>
                    <StyledLink href="/values" >Nos valeurs</StyledLink>
                    <StyledLink href="/estimate" >Devis</StyledLink>
                    <StyledLink href="/legal" >Conditions d&apos;utilisation</StyledLink>
                </Sitemap>
            </Content>
            <Dividor />
            <Rights>
                <Maker>Création <StyledLink href="https://www.jsankare.dev" target="blank" >Jordan Sankare</StyledLink></Maker>
            </Rights>
        </Container>
    );
};

export default Footer;
