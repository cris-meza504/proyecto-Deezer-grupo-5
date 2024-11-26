import React, { useState } from 'react';

const Artists2025 = () => {
  const artists = [
    { name: 'Rising Pop', description: '80 canciones - 80.575 fans', img: '/images/image13.jpg' },
    { name: 'R&B New Faces', description: '52 canciones - 231.626 fans', img: '/images/image14.jpg' },
    { name: 'Nueva Ola', description: '50 canciones - 132.737 fans', img: '/images/image15.jpg' },
    { name: 'Beats Of Tomorrow', description: '30 canciones - 189 fans', img: '/images/image16.jpg' },
    { name: 'bloom', description: '44 canciones - 188 fans', img: '/images/image17.jpg' },
  ];

  const [hovered, setHovered] = useState(null);
  const [liked, setLiked] = useState(Array(artists.length).fill(false));

  const toggleLike = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index];
    setLiked(updatedLikes);
  };

  return (
    <div style={styles.categoryContainer}>
      <h2 style={styles.categoryTitle}>Artistas que no debes perderte en 2025</h2>
      <div style={styles.squaresContainer}>
        {artists.map((artist, index) => (
          <div key={index} style={styles.squareItem}>
            <div
              style={{
                ...styles.square,
                backgroundImage: `url(${process.env.PUBLIC_URL + artist.img})`,
                filter: hovered === index ? 'brightness(75%)' : 'brightness(100%)',
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === index && (
                <div style={styles.buttonsContainer}>
                  <button style={styles.playButton}>▶</button>
                  <button
                    style={{
                      ...styles.likeButton,
                      color: liked[index] ? '#B560FF' : '#000000',
                    }}
                    onClick={(e) => {
                      e.stopPropagation(); // Evita que el evento afecte al hover
                      toggleLike(index);
                    }}
                  >
                    ♥
                  </button>
                </div>
              )}
            </div>
            <div style={styles.artistInfo}>
              <span style={styles.artistName}>{artist.name}</span>
              
            </div>
            <div>
            <span style={styles.artistDescription}>{artist.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  categoryContainer: {
    padding: '20px',
    color: '#fff',
  },
  categoryTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  squaresContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  squareItem: {
    width: '250px', // Tamaño de cada cuadrado
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  square: {
    width: '100%',
    height: '250px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px', // Esquinas redondeadas
    transition: 'filter 0.3s ease',
    position: 'relative',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: '10px',
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    width: '100%',
  },
  playButton: {
    fontSize: '18px',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    border: 'none',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  likeButton: {
    fontSize: '27px',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    border: 'none',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  artistInfo: {
    marginTop: '10px',
    textAlign: 'center',
    lineHeight: '1.5',
  },
  artistName: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  artistDescription: {
    fontSize: '14px',
    color: '#a9a6aa',
  },
};

export default Artists2025;