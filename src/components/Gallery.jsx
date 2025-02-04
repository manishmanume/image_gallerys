import React from 'react';
import ArtCard from './ArtCard';
import '../assets/CSS/Gallery.css';

const Gallery = () => {
  const artworks = [
    { src: '../../public/Images/1.jpg', alt: 'Artwork 1' },
    { src: '../../public/Images/2.jpg', alt: 'Artwork 2' },
    { src: '../../public/Images/3.jpg', alt: 'Artwork 3' },
    { src: '../../public/Images/4.jpg', alt: 'Artwork 4' },
    { src: '../../public/Images/5.jpg', alt: 'Artwork 5' },
    { src: '../../public/Images/6.jpg', alt: 'Artwork 6' },
    { src: '../../public/Images/7.jpg', alt: 'Artwork 7' },
    { src: '../../public/Images/8.jpg', alt: 'Artwork 8' },
  ];
  
  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1>Digital Art Gallery</h1>
        <p>
          Step into a world where imagination knows no bounds. Our gallery showcases a diverse collection of contemporary and classical artworks from emerging and established artists.
        </p>
      </div>
      <div className="art-grid">
        {artworks?.map((art, index) => (
          <ArtCard key={index} src={art.src} alt={art.alt} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
