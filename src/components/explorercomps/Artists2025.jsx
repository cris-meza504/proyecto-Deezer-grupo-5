import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Asegúrate de tener axios instalado

const Artists2025 = () => {
  const [artists, setArtists] = useState([]);  // Estado para almacenar los artistas
  const [hovered, setHovered] = useState(null);
  const [liked, setLiked] = useState(Array(5).fill(false));

  // Función para obtener los artistas desde el backend
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/artist-stats')  // Aquí pon la URL correcta de tu backend
      .then(response => {
        setArtists(response.data);  // Actualizar el estado con los artistas obtenidos
      })
      .catch(error => {
        console.error("Error al obtener los artistas:", error);
      });
  }, []);

  const toggleLike = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index];
    setLiked(updatedLikes);
  };

  return (
    <div style={styles.categoryContainer}>
      <h2 style={styles.categoryTitle}>Artistas que no debes perderte en 2025</h2>
      <div style={styles.squaresContainer}>
        {artists.slice(0, 5).map((artist, index) => (
          <div key={index} style={styles.squareItem}>
            <div
              style={{
                ...styles.square,
                backgroundImage: `url(${process.env.PUBLIC_URL + artist.url_foto})`,
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
                      e.stopPropagation();  // Evita que el evento afecte al hover
                      toggleLike(index);
                    }}
                  >
                    ♥
                  </button>
                </div>
              )}
            </div>
            <div style={styles.artistInfo}>
              <span style={styles.artistName}>{artist.nombre_artista}</span>
            </div>
            <div>
              <span style={styles.artistDescription}>
                {artist.cantidad_cancion} canciones - {artist.fans} fans
              </span>
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
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  square: {
    width: '100%',
    height: '250px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
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