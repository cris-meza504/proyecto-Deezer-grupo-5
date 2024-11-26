import React, { useState } from 'react';

const Explorer = () => {
  const categories = [
    { name: '', img: '/images/image1.jpg', link: '/explore/1' },  // Sin texto
    { name: '', img: '/images/image2.jpg', link: '/explore/2' },  // Sin texto
    { name: 'Tests de música', img: '/images/image3.jpg', link: '/tests' }, // Con texto
    { name: 'Conciertos', img: '/images/image4.jpg', link: '/conciertos' }, // Con texto
    { name: 'Podcasts', img: '/images/image5.jpg', link: '/podcasts' }, // Con texto
  ];
  const [hovered, setHovered] = useState(null);

  return (
    <div style={styles.categoryContainer}>
      <h1 style={styles.categoryTitle}>Explorar</h1>
      <div style={styles.cardsContainer}>
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.link} // Enlace a la página correspondiente
            style={styles.cardItem}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              style={{
                ...styles.card,
                backgroundImage: `url(${process.env.PUBLIC_URL + category.img})`,
                filter: hovered === index ? 'brightness(75%)' : 'brightness(100%)', // Aplicamos el filtro
              }}
            >
              {/* Solo mostramos el texto si existe */}
              {category.name && <span style={styles.cardText}>{category.name}</span>}
            </div>
          </a>
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
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '160px',
  },
  cardItem: {
    width: '130px', // Ajuste para que las tarjetas se acomoden
    cursor: 'pointer',
    textDecoration: 'none', // Eliminar subrayado de los enlaces
  },
  card: {
    width: '280px',
    height: '160px',
    borderRadius: '15px', // Esquinas redondeadas
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    transition: 'filter 0.3s ease', // Transición del filtro
    display: 'flex',
    alignItems: 'center', // Alineamos el texto en la parte inferior
    justifyContent: 'center',
  },
  cardText: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Sombra para mejor visibilidad del texto
    padding: '10px',
  },
};

export default Explorer;