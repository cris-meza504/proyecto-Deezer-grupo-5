import React, { useState } from 'react';

const AlbumsOfTheWeek = () => {
  const albums = [
    { 
      name: 'Shawn', 
      artist: 'de Shawn Mendes', 
      releaseDate: 'Publicado el 15/11/2024',
      img: '/images/image20.jpg' 
    },
    { 
      name: 'Bouquet', 
      artist: 'de Gwen Stefani', 
      releaseDate: 'Publicado el 15/11/2024',
      img: '/images/image21.jpg' 
    },
    { 
      name: 'From Zero', 
      artist: 'de Linkin Park', 
      releaseDate: 'Publicado el 15/11/2024',
      img: '/images/image22.jpg' 
    },
    { 
      name: 'The R♾️ts', 
      artist: 'de Marshmello', 
      releaseDate: 'Publicado el 15/11/2024',
      img: '/images/image23.jpg' 
    },
    { 
      name: 'Cosa Nuestra', 
      artist: 'de Rauw Alejandro', 
      releaseDate: 'Publicado el 15/11/2024',
      img: '/images/image24.jpg' 
    },
  ];

  const [hovered, setHovered] = useState(null);
  const [liked, setLiked] = useState(Array(albums.length).fill(false));

  const toggleLike = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index];
    setLiked(updatedLikes);
  };

  return (
    <div style={styles.categoryContainer}>
      <h2 style={styles.categoryTitle}>Álbumes de la semana</h2>
      <p style={styles.categoryDescription}>Recomendados por nuestros expertos</p>
      <div style={styles.squaresContainer}>
        {albums.map((album, index) => (
          <div key={index} style={styles.squareItem}>
            <div
              style={{
                ...styles.square,
                backgroundImage: `url(${process.env.PUBLIC_URL + album.img})`,
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
            <div style={styles.albumInfo}>
              <div style={styles.albumName}>{album.name}</div>
              <div style={styles.albumArtist}>{album.artist}</div>
              <div style={styles.albumReleaseDate}>{album.releaseDate}</div>
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
    marginBottom: '100px', // Agregar margen para evitar que la player bar tape la información
  },
  categoryTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  categoryDescription: {
    fontSize: '16px',
    color: '#a9a6aa',
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
  albumInfo: {
    marginTop: '10px',
    textAlign: 'center',
    lineHeight: '1.5',
  },
  albumName: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  albumArtist: {
    fontSize: '14px',
    color: '#a9a6aa',
  },
  albumReleaseDate: {
    fontSize: '12px',
    color: '#6e6d72',
    marginBottom: '80px',
  },
};

export default AlbumsOfTheWeek;