import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.section`
`

const Content = styled.div``

const Informations = styled.div``

const Contact = styled.div``

const ContactTitle = styled.h4``

const Icon = styled.img`
    width: 100%;
    max-width: 50px;
`

const Socials = styled.div``

const Logo = styled.img``

const Sitemap = styled.div``

const Rights = styled.div`
    
`

const Maker = styled.p`
    text-align: center;

` 

const StyledLink = styled(Link)`
    text-decoration: none;
`

const Dividor = styled.div`
height: 1px;
width: 90%;
background-color: black;
margin: 0 auto;
`


const Footer = () => {
    return (
        <Container>
            <Content>
                <Informations>
                    <StyledLink><Logo src="/images/logo.png" /></StyledLink>
                    <Contact>
                        <ContactTitle>Contact :</ContactTitle>
                        <StyledLink to="tel:0674802188" ><Icon src="/images/phone.png" /></StyledLink>
                        <StyledLink to="mailto:Mariloubaty@outlook.fr" ><Icon src="/images/mail.png" /></StyledLink>
                        <Socials>
                        <StyledLink to="https://www.instagram.com/marilou_pet_sitting/" target="blank" ><Icon src="/images/instagram.png" /></StyledLink>
                        <StyledLink to="https://www.facebook.com/profile.php?id=100090481339100&mibextid=LQQJ4d" target="blank" ><Icon src="/images/facebook.png" /></StyledLink>
                        </Socials>
                    </Contact>
                </Informations>
                <Sitemap>

                </Sitemap>
            </Content>
            <Dividor />
            <Rights>
                <Maker>Création <StyledLink to="https://www.jsankare.dev" target="blank" >Jordan Sankare</StyledLink></Maker>
            </Rights>
        </Container>
    );
};

export default Footer;
