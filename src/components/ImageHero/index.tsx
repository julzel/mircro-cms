import React from "react";
import "./ImageHero.scss";
import Image from "../Image";

interface ImageHeroProps {
  imageUrl: string;
  title: string;
}

const ImageHero: React.FC<ImageHeroProps> = ({ imageUrl, title }) => {
  return (
    <div className="image-hero">
      <div className="image-hero-overlay">
        <h1 className="image-hero-title">{title}</h1>
      </div>
      <Image className="image-hero-image" src={imageUrl} alt={title} />
    </div>
  );
};

export default ImageHero;
