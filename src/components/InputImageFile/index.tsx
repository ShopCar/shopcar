import axios from "axios";
import React, { useState } from "react";
const API_KEY = "0bf7f06da6c974b8adf524e421cb2313";

interface iImageUpload {
  fcnt: (value: string) => void;
}

const ImageUpload = ({ fcnt }: iImageUpload) => {
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageChange = async (e: any) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("key", API_KEY);
      formData.append("image", file);

      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        formData
      );

      if (response.data && response.data.data && response.data.data.url) {
        const imageUrl = response.data.data.url;
        fcnt(imageUrl);
      } else {
        console.error("Falha ao fazer upload da imagem");
      }
    } catch (error) {
      console.error("Erro ao fazer upload da imagem:", error);
    }
    console.log("Upload:", selectedImage);
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
    </div>
  );
};

export default ImageUpload;
