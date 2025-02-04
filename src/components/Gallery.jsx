import React from 'react';
import ArtCard from './ArtCard';
import '../assets/CSS/Gallery.css';
import art1 from '../assets/Images/1.jpg';
import art2 from '../assets/Images/2.jpg';
import art3 from '../assets/Images/3.jpg';
import art4 from '../assets/Images/4.jpg';
import art5 from '../assets/Images/5.jpg';
import art6 from '../assets/Images/6.jpg';
import art7 from '../assets/Images/7.jpg';
import art8 from '../assets/Images/8.jpg';

const Gallery = () => {
  const artworks = [
    { src: art1, alt: 'Artwork 1' },
    { src: art2, alt: 'Artwork 2' },
    { src: art3, alt: 'Artwork 3' },
    { src: art4, alt: 'Artwork 4' },
    { src: art5, alt: 'Artwork 5' },
    { src: art6, alt: 'Artwork 6' },
    { src: art7, alt: 'Artwork 7' },
    { src: art8, alt: 'Artwork 8' },
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
