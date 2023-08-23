import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Review from './Review';
import axios from 'axios';

const Container = styled.section`
    width: 80%;
    max-width: auto;
    margin: 0 auto;
    @media (max-width: 375px) {
        width: 70%;
        margin: 0 auto;
    }
`

const Form = styled.form`
    display: grid;
    gap: 20px;
`

const NameInput = styled.input``

const QuoteInput = styled.input``

const Add = styled.button`
    padding: 10px;
`

const Testimonial = () => {

    const [token, setToken] = useState(null)
    const [reviews, setReviews] = useState([])
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

    const [author, setAuthor] = useState('');
    const [quote, setQuote] = useState('');

    useEffect(() => {
        const token = localStorage.getItem("authenticatedUser")
        if (token != null) {
            setToken(token)
        }
    }, []);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`${backendUrl}/reviews`)
                setReviews(response.data.map(element => ({...element, review:`${backendUrl}/${element.review}`})));
            }
            catch(error) {
                console.error('Error fetching review:', error);
            };
        }
        fetchReviews();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', author);
        formData.append('quote', quote);

        try {
            const response = await axios.post(`${backendUrl}/reviews`, formData);
            const data = response.data;
            setReviews([...reviews, data]);
            setAuthor('');
            setQuote('');
        } catch (error) {
            console.error('Error uploading review', error)
        }
    } 

    return (
        <Container>
            <Review reviews={reviews} />
            {
                token != null && 
                <Form onSubmit={handleSubmit}>
                    <NameInput
                        type="text"
                        placeholder="Nom"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <QuoteInput
                        type="text"
                        placeholder="Avis"
                        value={quote}
                        onChange={(e) => setQuote(e.target.value)}
                    />
                    <Add type="submit">Ajouter un avis</Add>
                </Form>
            }
        </Container>
    );
};

export default Testimonial;
