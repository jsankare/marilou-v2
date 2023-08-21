import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../src/components/PageHero';
import Head from "next/head";
import GaleryPicture from '../src/components/GaleryPicture';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    gap: 10px;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    gap: 15px;
    @media (max-width: 1024px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0 auto;
    }
`

const Form = styled.form`
    display: grid;
    gap: 20px;
`

const TitleInput = styled.input``

const CaptionInput = styled.input``

const ImgInput = styled.input``

const Add = styled.button`
    padding: 10px;
`

const Gallery = () => {
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
            const response = await axios.post(`${backendUrl}/images`, formData);
            setImages([...images, `${backendUrl}/${response.data}`]);
            setTitle('');
            setCaption('');
            setImageFile(null);
        } catch (error) {
            console.error('Error uploading image', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${backendUrl}/images/${id}`)
            const updatedImages = images.filter(image => image._id !==id);
            setImages(updatedImages)
        } catch (error) {
            console.error('Error deleting image', error)
        }
    }

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`${backendUrl}/images`)
                setImages(response.data.map(element => ({...element, image:`${backendUrl}/${element.image}`})));
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
            </Head>
            <Header image="/images/dog_sunset.jpg" title="Galerie" subtitle="La photographie est un arrêt du cœur d'une fraction de seconde." author="Pierre Movila" />
            <Form onSubmit={handleSubmit}>
                <TitleInput
                    type="text"
                    placeholder="Titre"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <CaptionInput
                    type="text"
                    placeholder="Caption"
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
            <Wrapper>
                {images.map((display) => (
                    <GaleryPicture
                        key={display._id}
                        id={display._id}
                        image={display.image}
                        title={display.title}
                        caption={display.caption}
                        onDelete={handleDelete}
                    />
                ))}
            </Wrapper>
        </Container>
    );
};

export default Gallery;
