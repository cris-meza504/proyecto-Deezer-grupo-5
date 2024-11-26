import React, { useState } from "react";

const Albums2024 = () => {
  const albums = [
    {
      name: "LOOM",
      artist: "Imagine Dragons",
      releaseDate: "Publicado el 28/06/2024",
      img: "/images/image16.jpg",
    },
    {
      name: "Reasonable Woman",
      artist: "Sia",
      releaseDate: "Publicado el 03/05/2024",
      img: "/images/image17.jpg",
    },
    {
      name: "Radical Optimism",
      artist: "Dua Lipa",
      releaseDate: "Publicado el 03/05/2024",
      img: "/images/image18.jpg",
    },
    {
      name: "Fireworks & Rollerblades",
      artist: "Benson Boone",
      releaseDate: "Publicado el 26/07/2024",
      img: "/images/image19.jpg",
    },
    {
      name: "Lose Control (Alt. Versions)",
      artist: "Teddy Swims",
      releaseDate: "Publicado el 29/02/2024",
      img: "/images/image20.jpg",
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
      <h2 style={styles.categoryTitle}>Álbumes que marcaron el 2024</h2>
      <div style={styles.squaresContainer}>
        {albums.map((album, index) => (
          <div key={index} style={styles.squareItem}>
            <div
              style={{
                ...styles.square,
                backgroundImage: `url(${process.env.PUBLIC_URL + album.img})`,
                filter:
                  hovered === index ? "brightness(75%)" : "brightness(100%)",
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
                      color: liked[index] ? "#B560FF" : "#000000",
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
    padding: "20px",
    color: "#fff",
  },
  categoryTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  squaresContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  squareItem: {
    width: "250px", // Tamaño de cada cuadrado
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  square: {
    width: "100%",
    height: "250px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px", // Esquinas redondeadas
    transition: "filter 0.3s ease",
    position: "relative",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: "10px",
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    width: "100%",
  },
  playButton: {
    fontSize: "18px",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    border: "none",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    cursor: "pointer",
  },
  likeButton: {
    fontSize: "27px",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    border: "none",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    cursor: "pointer",
  },
  albumInfo: {
    marginTop: "10px",
    textAlign: "center",
    lineHeight: "1.5",
  },
  albumName: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  albumArtist: {
    fontSize: "14px",
    color: "#a9a6aa",
  },
  albumReleaseDate: {
    fontSize: "12px",
    color: "#7d7a80",
  },
};

export default Albums2024;
