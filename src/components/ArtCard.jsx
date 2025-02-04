import React from 'react';
import '../assets/CSS/ArtCard.css';

const ArtCard = ({ src, alt }) => {
  return (
    <div className="art-card">
      <img src={src} alt={alt} />
    </div>
  );
};

export default ArtCard;
