import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Header from '../src/components/PageHero';
import TextInput from "../src/components/Form/Inputs/Text";
import Validate from "../src/components/Form/Inputs/Validate"

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    width: 100%;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const Title = styled.h2`
    text-align: center;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
`

const Inputs = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
`

const Login = () => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authenticated, setAuthenticated] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${backendUrl}/login`, {
                username,
                password,
            });
            localStorage.setItem("authenticatedUser", response.data.token)
            router.push('/');
        } catch (error) {
            console.error('Error during login:', error);
        }
    }

    const handleLogout = async (event) => {
        event.preventDefault();
        try {
            localStorage.removeItem("authenticatedUser");
            setAuthenticated(false);
            router.push('/');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <Container>
            <Header image="/images/login_hero.jpg" title="Se connecter" subtitle="Cette page est réservée à l'administratrice du site" author="J.Sankare" />
            <Wrapper>
                <Title>Connexion</Title>
                <StyledForm onSubmit={handleLogin}>
                <Inputs>
                    <TextInput
                        label="Identifiant"
                        name="login"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextInput
                        label="Mot de passe"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Inputs>
                <Validate onClick={handleLogin} text="Me connecter" />
                <Validate onClick={handleLogout} text="Me déconnecter" />
            </StyledForm>
            </Wrapper>
        </Container>
    );
};

export default Login;
