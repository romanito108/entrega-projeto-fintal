import React, { useState } from 'react';
import { uploadImage } from './firebaseConfig'; // 🔹 Importando a função de upload

const UploadImageComponent = () => {
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleUpload = () => {
    if (image) {
      uploadImage(image).then((url) => {
        setImageURL(url); // 🔹 Salvando a URL da imagem no estado
        console.log("Imagem enviada com sucesso. URL:", url);
      });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
      {imageURL && <img src={imageURL} alt="Imagem carregada" />}
    </div>
  );
};

export default UploadImageComponent;
