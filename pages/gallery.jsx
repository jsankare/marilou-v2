import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../src/components/PageHero';
import Head from "next/head";
import GaleryImage from '../src/components/GaleryImage';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    gap: 20px;
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    gap: 15px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`

const Form = styled.form`
    display: grid;
    gap: 10px;
`

const TitleInput = styled.input`
    padding: 10px;
    font-size: 16px;
`

const CaptionInput = styled.input`
    padding: 10px;
    font-size: 16px;
`

const ImgInput = styled.input`
    padding: 10px;
    font-size: 16px;
`

const Add = styled.button`
    padding: 5px 10px;
    border-radius:10px;
    font-size: 16px;
    background-color: #538a82;
`

const Gallery = () => {

    const [token, setToken] = useState(null)
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

    const [images, setImages] = useState([]);
    const [title, setTitle] = useState('');
    const [caption, setCaption] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('caption', caption);
        formData.append('image', imageFile);
        
        try {
            const response = await axios.post(`${backendUrl}/images`, formData, {headers: {Authorization: `Bearer ${token}` }});
            setImages([...images, response.data]);
            setTitle('');
            setCaption('');
            setImageFile(null);
        } catch (error) {
            console.error('Error uploading image', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${backendUrl}/images/${id}`, {headers: {Authorization: `Bearer ${token}` }})
            setImages(images.filter(image => image._id !== id))
        } catch (error) {
            console.error('Error deleting image', error)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("authenticatedUser")
        if (token != null) {
            setToken(token)
        }
    }, []);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`${backendUrl}/images`)
                setImages(response.data);
            }
            catch(error) {
                console.error('Error fetching images:', error);
            };
        }
        fetchImages();
    }, []);

    return (
        <Container>
            <Head>
            <title>Marilou - Galerie</title>
            <meta name="description" content="Retrouvez ici les photos des chiens gardés par Marilou lors des gardes ou lors des promenades." />
            </Head>
            <Header image="/images/dog_sunset.webp" title="Galerie" subtitle="La photographie est un arrêt du cœur d'une fraction de seconde." author="Pierre Movila" />
            {
                token != null && 
                <Form onSubmit={handleSubmit}>
                    <TitleInput
                        type="text"
                        placeholder="Titre"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <CaptionInput
                        type="text"
                        placeholder="Légende | Texte"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                    />
                    <ImgInput
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        onChange={(e) => setImageFile(e.target.files[0])}
                    />
                    <Add type="submit">Ajouter une photo</Add>
                </Form>
            }
            <Wrapper>
                {images.map((display) => (
                    <GaleryImage
                        key={display._id}
                        id={display._id}
                        image={display.image}
                        title={display.title}
                        caption={display.caption}
                        token={token}
                        onDelete={() => handleDelete(display._id)}
                    />
                ))}
            </Wrapper>
        </Container>
    );
};

export default Gallery;
