import React from 'react'
import { useState } from 'react';
import {
    FaHeart,
  } from "react-icons/fa";

export default function Cancion() {
    const [isHearted, setIsHearted] = useState(false); // Estado para el botón de corazón
    const [isDisliked, setIsDisliked] = useState(false); // Estado para el botón de dislike

    const toggleHeart = () => {
        setIsHearted(!isHearted);
        if (!isHearted) setIsDisliked(false); // Si se activa el corazón, desactivar dislike
      };


  return (
    <>
      {/* Información de la pista */}
      <div style={styles.trackInfo}>
        <span>🎵 Artista - Canción</span>
        <button style={styles.heartButton} onClick={toggleHeart}>
          <FaHeart style={{ color: isHearted ? "#FF4081" : "#fff" }} />
        </button>
      </div>
    </>
  );
};

const styles = {
    trackInfo: {
        fontSize: "16px",
        fontWeight: "bold",
        justifyContent: "space-between",
        display: "flex",
        width: "100%",
        marginBottom: "20px",
        paddingLeft: "20px",
        paddingRight: "550px",
      },
  heartButton: {
    fontSize: "24px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    padding: 0,
    marginLeft: "10px",
  },
};