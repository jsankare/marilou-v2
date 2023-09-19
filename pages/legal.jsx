import React from "react";
import styled from 'styled-components';
import Header from '../src/components/PageHero';
import Conditions from "../src/components/Conditions";
import Head from "next/head";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 50px;
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 45px;
`

const DateOfEffect = styled.p`
    text-align: right;
    font-size: 14px;
`

const TermsOfService = () => {
    return (
        <Container>
            <Head>
            <title>Marilou - Legal</title>
            </Head>
            <Header image="/images/dog_legal.jpg" title="Conditions d'utilisation" subtitle="Ce que l'on conçoit bien s'énonce clairement, Et les mots pour le dire arrivent aisément." author="Nicolas Boileau" />
            <Wrapper>
                <Conditions title="Article 1 : Mentions légales" 
                    content="L’édition et la direction de la publication du site https://marilou-pet-sitting.fr/ est assurée par BATY Marilou , domicilié 23 rue de villaré 77730 Citry.
                    Numéro de téléphone est 0674802188
                    Adresse e-mail Mariloubaty@outlook.fr.
                    L'hébergeur du site https://marilou-pet-sitting.fr/ est la société Github , dont le siège social est situé au 88 COLIN P. KELLY JR ST CA 94107 99404 SAN FRANCISCO." 
                />
                <Conditions title="Article 2 : Accès au site" 
                    content="Le site https://marilou-pet-sitting.fr/ permet à l'Utilisateur un accès gratuit aux services suivants :
                    Le site internet propose les services suivants :
                    Informations, contact.
                    Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge." 
                />
                <Conditions title="Article 3 : Collecte des données" 
                    content="Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.
                    En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit :" 
                />
                <Conditions title="Article 4 : Propriété intellectuelle" 
                    content="Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son...) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.
                    L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite.
                    Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation expresse de l’exploitant du site Internet constituerait une contrefaçon sanctionnée par l’article L 335-2 et suivants du Code de la propriété intellectuelle.
                    Il est rappelé conformément à l’article L122-5 du Code de propriété intellectuelle que l’Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa source."
                 />
                <Conditions title="Article 5 : Responsabilité" 
                    content="Les sources des informations diffusées sur le site https://marilou-pet-sitting.fr/ sont réputées fiables mais le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions.
                    Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, le site https://marilou-pet-sitting.fr/ ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, le site ne peut être tenue responsable de l’utilisation et de l’interprétation de l’information contenue dans ce site.
                    Le site https://marilou-pet-sitting.fr/ ne peut être tenu pour responsable d’éventuels virus qui pourraient infecter l’ordinateur ou tout matériel informatique de l’Internaute, suite à une utilisation, à l’accès, ou au téléchargement provenant de ce site.
                    La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers."
                />
                <Conditions title="Article 6 : Liens hypertextes" 
                    content="Des liens hypertextes peuvent être présents sur le site. L’Utilisateur est informé qu’en cliquant sur ces liens, il sortira du site https://marilou-pet-sitting.fr/. Ce dernier n’a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu."
                />
                <Conditions title="Article 7 : Cookies" 
                    content="L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de navigation.
                    Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l’ordinateur de l’Utilisateur par votre navigateur et qui sont nécessaires à l’utilisation du site https://marilou-pet- sitting.fr/. Les cookies ne contiennent pas d’information personnelle et ne peuvent pas être utilisés pour identifier quelqu’un. Un cookie contient un identifiant unique, généré aléatoirement et donc anonyme. Certains cookies expirent à la fin de la visite de l’Utilisateur, d’autres restent.
                    L’information contenue dans les cookies est utilisée pour améliorer le site https://marilou-pet-sitting.fr/.
                    En naviguant sur le site, L’Utilisateur les accepte.
                    L’Utilisateur pourra désactiver ces cookies par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation."
                />
                <Conditions title="Article 8 : Droit applicable et juridiction compétente" 
                    content="La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître.
                    Pour toute question relative à l’application des présentes CGU, vous pouvez joindre l’éditeur aux coordonnées inscrites à l’ARTICLE 1."
                />
                <DateOfEffect>Mise à jour le 19/09/2023</DateOfEffect>        
            </Wrapper>
        </Container>
    );
};

export default TermsOfService;
