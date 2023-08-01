import React from "react";
import styled from 'styled-components';
import Header from '../src/components/PageHero';
import PackLogic from "../src/components/Prices/PackLogic";

const Person = [
    {
      name: "Promenades",
      price: "",
      variable: [
        {
            value: "15 minutes",
            cost: "5€",
        },
        {
            value: "30 minutes",
            cost: "9€",
        },
        {
            value: "45 minutes",
            cost: "12€",
        },
        {
            value: "60 minutes",
            cost: "15€",
        },
      ],
      features: [
        `Promenade en laisse ou détaché (avec un bon rappel)`,
        `Moment privilégié de câlins et de caresses`,
        `Jeux & intéractions durant la promenade`,
        `Séance photo si autorisation préalable`,
      ],
    },
    {
      name: "Visites",
      price: "",
      variable: [
        {
            value: "Chiens",
            additional: [
                {
                    number: "1 animal",
                    cost: "15€",
                },
                {
                    number: "2 animaux",
                    cost: "20€",
                },
                {
                    number: "3 animaux",
                    cost: "25€",
                },
            ]
        },
        {
            value: "Chats",
            additional: [
                {
                    number: "Prix par animal",
                    cost: "5€",
                },
            ]
        },
      ],
      features: [
        `Alimenter et abreuver les animaux`,
        `Sortie jardin pour faire les besoins`,
        `Contrôle de l'intégrité du domicile`,
        `Administration de soins/médicaments si necessaire`,
        `Moment privilégié de câlins et caresses`,
        `Jeux et intéractions`,
        `Séance photo si autorisation préalable`,
      ],
    },
    {
      name: "Forfait Semaine",
      price: "",
      variable: [
        {
            value: "1 semaine",
            additional: [
                {
                    number: "1 animal",
                    cost: "182,70€",
                },
                {
                    number: "2 animaux",
                    cost: "226,10€",
                },
                {
                    number: "3 animaux",
                    cost: "245,70€",
                },
            ]
        },
        {
            value: "2 semaines",
            additional: [
                {
                    number: "1 animal",
                    cost: "325,85€",
                },
                {
                    number: "2 animaux",
                    cost: "452,20€",
                },
                {
                    number: "3 animaux",
                    cost: "491,40€",
                },
            ]
        },
      ],
      features: [
        `3 visites à domicile par jour`,
        `Promenade de 30 minutes`,
        `Jeux et intéraction`,
        `Contrôle de l'intégrité du domicile`,
        `Administration de soins/médicaments si necessaire`,
        `Moment privilégié de câlins et caresses`,
        `Séances photo si autorisation préalable`,
      ],
    },
    {
      name: "Forfait mensuel",
      price: "",
      variable: [
        {
            value: "Promenades",
            additional: [
                {
                    number: "15 minutes",
                    cost: "95€",
                },
                {
                    number: "30 minutes",
                    cost: "171€",
                },
                {
                    number: "45 minutes",
                    cost: "216€",
                },
                {
                    number: "60 minutes",
                    cost: "270€",
                },
            ]
        },
      ],
      features: [
        `3 visites à domicile par jour`,
        `Promenade de 30 minutes`,
        `Jeux et intéraction`,
        `Contrôle de l'intégrité du domicile`,
        `Administration de soins/médicaments si necessaire`,
        `Moment privilégié de câlins et caresses`,
        `Séances photo si autorisation préalable`,
      ],
    },
  ];

  const Company = [
    {
      name: "Forfait journalier",
      price: "",
      variable: [
        {
            value: "1 - 10 animaux",
            cost: "25€",
        },
        {
            value: "11 -25 animaux",
            cost: "35€",
        },
        {
            value: "26 - 40 animaux",
            cost: "45€",
        },
        {
            value: "41 - 55 animaux",
            cost: "60€",
        },
        {
            value: "56 - 100 animaux",
            cost: "75€",
        },
        {
            value: "100+ animaux",
            cost: "100€",
        },
      ],
      features: [
        `Alimenter et abreuver tous les animaux de l’élevage`,
        `Administration de soins/médicaments si nécessaire`,
        `Nettoyage complet de la nursery `,
        `Nettoyage des box/chenils adultes complets intérieur/extérieur`,
        `Sortir les animaux hors de leur box (séparés ou ensemble)`,
        `Jeux et interactions avec chacun des chiens`,
        `Séance photos avec autorisation du propriétaire`,
      ],
    },
  ];
  
const Container = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`

const Wrapper = styled.div`
    margin: 0 auto;
    gap: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
`

const Profesionnals = styled.div``

const Individuals = styled.div`

`

const Prestations = () => {
    return (
        <Container>
            <Header image="/images/prestationsbackground.jpg" title="Prestations" subtitle="La plus petite des bonnes actions envers un animal est un pas vers la construction d'un monde meilleur." author="Richard Carlson" />
            <Wrapper>
                <Individuals>
                    <PackLogic packsData={Person} title="Particuliers" />
                </Individuals>
                <Profesionnals>
                    <PackLogic packsData={Company} title="Professionnels" />
                </Profesionnals>
            </Wrapper>
        </Container>
    );
};

export default Prestations;