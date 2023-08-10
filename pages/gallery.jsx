// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import Header from '../src/components/PageHero';
// import Head from "next/head";
// import ImageUpload from '../src/components/ImageUpload';

// const Container = styled.section``

// const Wrapper = styled.div``

// const ImageWrapper = styled.div`
//     margin: 10px;
// `;

// const Gallery = () => {

//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         fetchImages();
//     }, []);

//     const fetchImages = async () => {
//         try {
//             const response = await axios.get('http://localhost:3001/photo');
//             setImages(response.data);
//         } catch (error) {
//             console.error('Error fetching images:', error);
//         }
//     };

//     return (
//         <Container>
//             <Head>
//             <title>Marilou - Galerie</title>
//             </Head>
//             <Header image="/images/dog_sunset.jpg" title="Galerie" subtitle="La photographie est un arrêt du cœur d'une fraction de seconde." author="Pierre Movila" />
//             <Wrapper>
//                 <ImageUpload />
//                 {images.map((image) => (
//                     <ImageWrapper key={image.id}>
//                         <img src={`http://localhost:3001/uploads/${image.filename}`} alt={image.title} />
//                         <p>{image.title}</p>
//                         <p>{image.description}</p>
//                     </ImageWrapper>
//                 ))}
//             </Wrapper>
//         </Container>
//     );
// };

// export default Gallery;
