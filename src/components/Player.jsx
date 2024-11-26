import React, { useState } from "react";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaVolumeMute,
  FaVolumeUp,
  FaThumbsDown,
  FaCog,
  FaRandom,
  FaRedo,
  FaHeart,
} from "react-icons/fa";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50); // Estado del volumen
  const [isMuted, setIsMuted] = useState(false);
  const [showVolume, setShowVolume] = useState(false); // Estado para mostrar/ocultar la barra de volumen
  const [isDisliked, setIsDisliked] = useState(false); // Estado para el botón de dislike
  const [isHearted, setIsHearted] = useState(false); // Estado para el botón de corazón
  const [isConfigActive, setIsConfigActive] = useState(false); // Estado para el botón de configuración
  const [isShuffling, setIsShuffling] = useState(false); // Estado para el botón de aleatorio
  const [isRepeating, setIsRepeating] = useState(false); // Estado para el botón de repetir
  const [soundQuality, setSoundQuality] = useState("128kb/s"); // Estado para la calidad de sonido
  const [normalizeAudio, setNormalizeAudio] = useState(false); // Estado para normalizar audio
  const [syncQueue, setSyncQueue] = useState(false); // Estado para sincronización de cola

  let hideVolumeTimeout; // Variable para el temporizador

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    setProgress(e.target.value);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    setIsMuted(false); // Al ajustar el volumen, quitar mute
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleDislike = () => {
    setIsDisliked(!isDisliked);
    if (!isDisliked) setIsHearted(false); // Si se activa dislike, desactivar el corazón
  };

  const toggleHeart = () => {
    setIsHearted(!isHearted);
    if (!isHearted) setIsDisliked(false); // Si se activa el corazón, desactivar dislike
  };

  const toggleConfig = () => {
    setIsConfigActive(!isConfigActive);
  };

  const toggleShuffle = () => {
    setIsShuffling(!isShuffling);
  };

  const toggleRepeat = () => {
    setIsRepeating(!isRepeating);
  };

  const handleMouseEnter = () => {
    clearTimeout(hideVolumeTimeout); // Cancela el temporizador si el ratón vuelve
    setShowVolume(true); // Muestra la barra de volumen
  };

  const handleMouseLeave = () => {
    hideVolumeTimeout = setTimeout(() => {
      setShowVolume(false); // Oculta la barra de volumen después de 300ms
    }, 300);
  };

  const handleInteraction = () => {
    clearTimeout(hideVolumeTimeout); // Evita que desaparezca mientras interactúas con la barra
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleQualityChange = (quality) => {
    setSoundQuality(quality);
  };

  return (
    <footer style={styles.player}>
      {/* Información de la pista */}
      <div style={styles.trackInfo}>
        <span>🎵 Artista - Canción</span>
        <button style={styles.heartButton} onClick={toggleHeart}>
          <FaHeart style={{ color: isHearted ? "#FF4081" : "#fff" }} />
        </button>
      </div>

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

      {/* Botones adicionales */}
      <div style={styles.actionButtons}>
        <button style={styles.actionButton} onClick={toggleDislike}>
          <FaThumbsDown style={{ color: isDisliked ? "#B560FF" : "#fff" }} />
        </button>

        {/* Control de volumen */}
        <div
          style={styles.volumeContainer}
          onMouseEnter={handleMouseEnter} // Mostrar barra al pasar el ratón
          onMouseLeave={handleMouseLeave} // Inicia el temporizador para ocultar la barra
        >
          <button
            style={{
              ...styles.volumeButton,
              color: isMuted ? "#B560FF" : "#fff", // Cambia el color cuando esté en mute
            }}
            onClick={toggleMute}
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          {showVolume && (
            <input
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : volume} // Si está en mute, la barra muestra 0
              onChange={handleVolumeChange}
              onMouseDown={handleInteraction} // Evita esconder la barra mientras interactúas
              onMouseUp={handleInteraction}
              style={styles.volumeSlider}
            />
          )}
        </div>

        {/* Botón de configuración */}
        <button
          style={{
            ...styles.actionButton,
            color: isConfigActive ? "#B560FF" : "#fff", // Cambia el color cuando está activo
          }}
          onClick={toggleConfig}
        >
          <FaCog />
        </button>

        {/* Menú de configuración */}
        {isConfigActive && (
          <div style={styles.configMenu}>
            <div>
              <span>Calidad de sonido</span>
              <div
                style={styles.option}
                onClick={() => handleQualityChange("128kb/s")}
              >
                <input
                  type="radio"
                  checked={soundQuality === "128kb/s"}
                  readOnly
                />{" "}
                Estándar 128kb/s
              </div>
              <div
                style={styles.option}
                onClick={() => handleQualityChange("320kb/s")}
              >
                <input
                  type="radio"
                  checked={soundQuality === "320kb/s"}
                  readOnly
                />{" "}
                Superior 320kb/s
              </div>
              <div
                style={styles.option}
                onClick={() => handleQualityChange("Lossless")}
              >
                <input
                  type="radio"
                  checked={soundQuality === "Lossless"}
                  readOnly
                />{" "}
                Alta fidelidad (Calidad sin pérdida)
              </div>
            </div>
            <div>
              <span>Normalizar audio</span>
              <input
                type="checkbox"
                checked={normalizeAudio}
                onChange={() => setNormalizeAudio(!normalizeAudio)}
              />
            </div>
            <div>
              <span>Sincronización de la cola de reproducción</span>
              <input
                type="checkbox"
                checked={syncQueue}
                onChange={() => setSyncQueue(!syncQueue)}
              />
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

const styles = {
  player: {
    background: "#1e1e1e",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: "58px",
    boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.5)",
  },
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
  },
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
    fontSize: "13px", // Reducir el tamaño del icono
    cursor: "pointer",
    backgroundColor: "#A238FF",
    borderRadius: "50%", // Hace el botón circular
    padding: "10px", // Reducir el padding para hacer el botón más pequeño
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
  actionButtons: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "10px",
    marginRight: "35px",
  },
  actionButton: {
    position: "relative",
    top: "3px",
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer",
    padding: "10px",
  },
  volumeContainer: {
    position: "relative",
    top: "3px",
    display: "flex",
    alignItems: "center",
    marginRight: "0px",
  },
  volumeButton: {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
  },
  volumeSlider: {
    position: "absolute",
    top: "-25px",
    right: "-55px",
    width: "240px",
    height: "5px",
    background: "#555",
    borderRadius: "5px",
    appearance: "none",
    outline: "none",
    cursor: "pointer",
    transition: "opacity 0.3s ease",
  },
  configMenu: {
    background: "#333",
    color: "#fff",
    padding: "10px",
    position: "absolute",
    top: "-200px", // Mueve el menú hacia arriba
    left: "-130px", // Mueve el menú hacia la izquierda
    borderRadius: "8px",
    width: "250px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  option: {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
    cursor: "pointer",
  },
};

export default Player;
