import React, { useState } from "react";

import {
    FaPlay,
    FaPause,
    FaStepForward,
    FaStepBackward,
    FaRandom,
    FaRedo,

  } from "react-icons/fa";

export default function Reproductor() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isShuffling, setIsShuffling] = useState(false); // Estado para el botón de aleatorio
    const [isRepeating, setIsRepeating] = useState(false); // Estado para el botón de repetir

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
      };
    
      const handleProgressChange = (e) => {
        setProgress(e.target.value);
      };

      
  const toggleShuffle = () => {
    setIsShuffling(!isShuffling);
  };

  const toggleRepeat = () => {
    setIsRepeating(!isRepeating);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };


  return (
    <>
      {/* Controles de reproducción con barra de progreso */}
      <div style={styles.controlSection}>
        <div style={styles.controls}>
          <button
            style={{
              ...styles.actionButton,
              color: isShuffling ? "#B560FF" : "#fff", // Cambia el color cuando está activo
            }}
            onClick={toggleShuffle}
          >
            <FaRandom />
          </button>

          <FaStepBackward style={styles.icon} />

          {isPlaying ? (
            <FaPause style={styles.playPauseIcon} onClick={togglePlayPause} />
          ) : (
            <FaPlay style={styles.playPauseIcon} onClick={togglePlayPause} />
          )}

          <FaStepForward style={styles.icon} />

          <button
            style={{
              ...styles.actionButton,
              color: isRepeating ? "#B560FF" : "#fff", // Cambia el color cuando está activo
            }}
            onClick={toggleRepeat}
          >
            <FaRedo />
          </button>
        </div>

        <div style={styles.progressContainer}>
          {/* Tiempo actual a la izquierda de la barra */}
          <span style={styles.time}>{formatTime(progress)}</span>
          <input
            type="range"
            min="0"
            max="225"
            value={progress}
            onChange={handleProgressChange}
            style={styles.progressBar}
          />
          {/* Duración total a la derecha de la barra */}
          <span style={styles.timemax}>3:45</span>
        </div>
      </div>
    </>
  )
}


const styles = {
    controlSection: {
      display: "flex",
      alignItems: "center",
      gap: "10px", // Espaciado entre los botones
    },
    controls: {
      position: "relative",
      top: "-14px",
      left: "0px",
      display: "flex",
      gap: "15px",
      alignItems: "center",
    },
    playPauseIcon: {
      fontSize: "27px", // Reducir el tamaño del icono
      cursor: "pointer",
      backgroundColor: "#A238FF",
      borderRadius: "60%", // Hace el botón circular
      padding: "4px", // Reducir el padding para hacer el botón más pequeño
      transition: "transform 0.3s ease, color 0.3s ease",
    },
    icon: {
      fontSize: "24px",
      cursor: "pointer",
      transition: "transform 0.3s ease, color 0.3s ease",
    },
    progressContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "680px", // Ajuste del tamaño de la barra de progreso
    },
    progressBar: {
      position: "relative",
      top: "15px",
      left: "-460px",
      width: "490px",
      height: "5px",
      background: "#555",
      borderRadius: "5px",
      appearance: "none",
      outline: "none",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
    time: {
      position: "relative",
      top: "14px",
      left: "-396px",
      fontSize: "12px",
      color: "#aaa",
    },
    timemax: {
      position: "relative",
      top: "14px",
      left: "-516px",
      fontSize: "12px",
      color: "#aaa",
    },
  };
  
  
