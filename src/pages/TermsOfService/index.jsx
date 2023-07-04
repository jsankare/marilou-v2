import React from "react";
import styled from 'styled-components';
import Header from '../../components/PageHero';
import Conditions from "../../components/Conditions";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 50px;
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 45px;
`

const TermsOfService = () => {
    return (
        <Container>
            <Header image="/images/dog_legal.jpg" title="Conditions d'utilisation" subtitle="Ce que l'on conçoit bien s'énonce clairement, Et les mots pour le dire arrivent aisément." author="Nicolas Boileau" />
            <Wrapper>
                <Conditions title="Premier titre" 
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed posuere purus, sagittis gravida justo. Sed cursus, justo nec dapibus sagittis, quam nulla blandit 
                        enim, eu scelerisque dui felis ac lectus. Vivamus ultricies sit amet leo at lacinia. Quisque imperdiet tortor et quam dapibus, vitae ultricies odio dapibus. 
                        Integer lacus quam, viverra fringilla condimentum a, porttitor nec nulla. Cras arcu nibh, sollicitudin molestie fermentum at, facilisis porta orci. Cras at 
                        luctus risus, ut viverra justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." />
                <Conditions title="Deuxième titre" 
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed posuere purus, sagittis gravida justo. Sed cursus, justo nec dapibus sagittis, quam nulla blandit 
                        enim, eu scelerisque dui felis ac lectus. Vivamus ultricies sit amet leo at lacinia. Quisque imperdiet tortor et quam dapibus, vitae ultricies odio dapibus. 
                        Integer lacus quam, viverra fringilla condimentum a, porttitor nec nulla. Cras arcu nibh, sollicitudin molestie fermentum at, facilisis porta orci. Cras at 
                        luctus risus, ut viverra justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." 
                        bold="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed posuere purus, sagittis gravida justo. Sed cursus, justo nec dapibus sagittis, quam nulla blandit 
                        enim, eu scelerisque dui felis ac lectus. Vivamus ultricies sit amet leo at lacinia. Quisque imperdiet tortor et quam dapibus, vitae ultricies odio dapibus. 
                        Integer lacus quam, viverra fringilla condimentum a, porttitor nec nulla. Cras arcu nibh, sollicitudin molestie fermentum at, facilisis porta orci. Cras at 
                        luctus risus, ut viverra justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."/>
                <Conditions title="Troisième titre" 
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed posuere purus, sagittis gravida justo. Sed cursus, justo nec dapibus sagittis, quam nulla blandit 
                        enim, eu scelerisque dui felis ac lectus. Vivamus ultricies sit amet leo at lacinia. Quisque imperdiet tortor et quam dapibus, vitae ultricies odio dapibus. 
                        Integer lacus quam, viverra fringilla condimentum a, porttitor nec nulla. Cras arcu nibh, sollicitudin molestie fermentum at, facilisis porta orci. Cras at 
                        luctus risus, ut viverra justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed posuere purus, sagittis gravida justo. Sed cursus, justo nec dapibus sagittis, quam nulla blandit 
                        enim, eu scelerisque dui felis ac lectus. Vivamus ultricies sit amet leo at lacinia. Quisque imperdiet tortor et quam dapibus, vitae ultricies odio dapibus. 
                        Integer lacus quam, viverra fringilla condimentum a, porttitor nec nulla. Cras arcu nibh, sollicitudin molestie fermentum at, facilisis porta orci. Cras at 
                        luctus risus, ut viverra justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." 
                        />
                <Conditions title="Quatrième titre" 
                        bold="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed posuere purus, sagittis gravida justo. Sed cursus, justo nec dapibus sagittis, quam nulla blandit 
                        enim, eu scelerisque dui felis ac lectus. Vivamus ultricies sit amet leo at lacinia. Quisque imperdiet tortor et quam dapibus, vitae ultricies odio dapibus. 
                        Integer lacus quam, viverra fringilla condimentum a, porttitor nec nulla. Cras arcu nibh, sollicitudin molestie fermentum at, facilisis porta orci. Cras at 
                        luctus risus, ut viverra justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."/>
            </Wrapper>
        </Container>
    );
};

export default TermsOfService;
