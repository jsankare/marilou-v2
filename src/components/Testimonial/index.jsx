import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Review from './Review';
import axios from 'axios';

const Container = styled.section`
    width: 80%;
    max-width: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    @media (max-width: 375px) {
        width: 70%;
        margin: 0 auto;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
`

const NameInput = styled.input``

const QuoteInput = styled.textarea``

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

        try {
            const response = await axios.post(`${backendUrl}/reviews`, {name: author, quote}, {headers: {Authorization: `Bearer ${token}` }});
            const data = response.data;
            setReviews([...reviews, data]);
            setAuthor('');
            setQuote('');
        } catch (error) {
            console.error('Error uploading review', error)
        }
    } 

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${backendUrl}/reviews/${id}`, {headers: {Authorization: `Bearer ${token}` }})
            setReviews(reviews.filter(review => review._id !== id))
            window.location.reload(false)
        } catch (error) {
            console.error('Error deleting review', error)
        }
    }

    return (
        <Container>
            <Review 
            reviews={reviews}
            onDelete={(reviewId) => handleDelete(reviewId)}
            token={token}
            />
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
