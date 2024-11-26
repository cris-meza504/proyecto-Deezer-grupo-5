import React, { useState } from 'react';

const CircleCategory = () => {
  // Array de círculos con su nombre y color
  const circles = [
    { name: 'Flow', img: '/images/image1.jpg', color: '#FF5733' },
    { name: 'Deporte', img: '/images/image2.jpg', color: '#33FF57' },
    { name: 'Fiesta', img: '/images/image3.jpg', color: '#3357FF' },
    { name: 'Chill', img: '/images/image4.jpg', color: '#F39C12' },
    { name: 'Triste', img: '/images/image5.jpg', color: '#9B59B6' },
    { name: 'Amor', img: '/images/image6.jpg', color: '#E74C3C' },
    { name: 'Concentración', img: '/images/image7.jpg', color: '#1ABC9C' },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <div style={styles.categoryContainer}>
      <h2 style={styles.categoryTitle}>Flow: la banda sonora para tus emociones</h2>
      <p style={styles.categoryDescription}>
        Un mix infinito y personalizado de música que te encanta y nuevos descubrimientos
      </p>
      <div style={styles.circlesContainer}>
        {circles.map((circle, index) => (
          <div key={index} style={styles.circleItem}>
            {/* Círculo con la imagen de fondo */}
            <div
              style={{
                ...styles.circle,
                backgroundImage: hovered === index ? 'none' : `url(${process.env.PUBLIC_URL + circle.img})`,
                backgroundColor: hovered === index ? circle.color : 'transparent', // Color de fondo estático en hover
                border: 'none', // Quitamos el borde en hover
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Botón de reproducir que aparece al pasar el mouse */}
              {hovered === index && (
                <button style={styles.playButton}>▶</button>
              )}
            </div>
            {/* Nombre debajo del círculo (separado) */}
            <span style={styles.circleName}>{circle.name}</span>
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
  },
  categoryDescription: {
    fontSize: '16px',
    marginBottom: '20px',
    color:'#a9a6aa'
  },
  circlesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px', // Añadimos un espacio entre los círculos
  },
  circleItem: {
    display: 'flex',
    flexDirection: 'column', // Pone la imagen y el nombre en columnas
    alignItems: 'center',
    justifyContent: 'center', // Centra los elementos en el contenedor
    cursor: 'default', // Hace que el puntero no cambie cuando se pasa sobre el texto
  },
  circle: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    backgroundSize: 'cover', // Asegura que la imagen cubra el círculo
    backgroundPosition: 'center', // Centra la imagen dentro del círculo
    transition: 'all 0.3s ease', // Transición de borde y color
    position: 'relative', // Para que el botón se posicione dentro del círculo
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', // Centra el botón en el círculo
    fontSize: '20px',
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    padding: '15px',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  circleName: {
    marginTop: '10px', // Espacio entre la imagen y el nombre
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
  },
};

export default CircleCategory;