// import React, { useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// const ImageUploadContainer = styled.div`
//     margin: 20px;
// `;

// const ImageInput = styled.input`
//     margin-right: 10px;
// `;

// const UploadButton = styled.button`
//     background-color: #007bff;
//     color: white;
//     border: none;
//     padding: 5px 10px;
//     cursor: pointer;
// `;

// const ImageUpload = () => {
//     const [selectedImage, setSelectedImage] = useState(null);

//     const handleImageChange = (event) => {
//         setSelectedImage(event.target.files[0]);
//     };

//     const handleUpload = async () => {
//         const formData = new FormData();
//         formData.append('photo', selectedImage);

//         try {
//             await axios.post('http://localhost:3001/photo', formData);
//             console.log('Image uploaded successfully');
//         } catch (error) {
//             console.error('Error uploading image:', error);
//         }
//     };

//     return (
//         <ImageUploadContainer>
//             <ImageInput type="file" accept="image/*" onChange={handleImageChange} />
//             <UploadButton onClick={handleUpload}>Upload Image</UploadButton>
//         </ImageUploadContainer>
//     );
// };

// export default ImageUpload;
