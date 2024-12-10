import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa';
import { useUser } from '../../context/UserContext';

export default function Cancion() {
  const [isHearted, setIsHearted] = useState(false); // Estado para el botón de corazón
  const [isDisliked, setIsDisliked] = useState(false); // Estado para el botón de dislike
  const [song, setSong] = useState(null); // Estado para almacenar la información de la canción
  const { user } = useUser(); // Obtener el usuario del contexto

  const toggleHeart = () => {
    setIsHearted(!isHearted);
    if (!isHearted) setIsDisliked(false); // Si se activa el corazón, desactivar dislike
  };

  // Obtener la última canción al cargar el componente
  useEffect(() => {
    if (user) {
      // Imprimir el ID del usuario
      console.log('ID del usuario:', user.id);

      // Hacer la solicitud GET para obtener la última canción
      axios
        .get(`http://127.0.0.1:8000/last-song/${user.id}`)
        .then((response) => {
          // Imprimir la respuesta del backend
          console.log('Respuesta del backend:', response.data);

          // Actualizar el estado con los datos de la canción
          setSong(response.data);
        })
        .catch((error) => {
          // Manejar errores en la solicitud
          console.error('Error al obtener la canción:', error);
        });
    }
  }, [user]); // Ejecutar solo cuando el usuario esté disponible

  return (
    <>
      {/* Información de la pista */}
      {song ? (
        <div style={styles.trackInfo}>
          
          <img 
            src={song.url_foto_portada || '/images/default-song.png'} 
            alt="Portada de la canción" 
            style={styles.songImage}
          />
          <span>{song.artista}</span><span> {song.titulo}</span>
          <button style={styles.heartButton} onClick={toggleHeart}>
            <FaHeart style={{ color: isHearted ? '#FF4081' : '#fff' }} />
          </button>
        </div>
      ) : (
        <p>Cargando información de la canción...</p>
      )}
    </>
  );
}

const styles = {
  trackInfo: {
    fontSize: '16px',
    fontWeight: 'bold',
    justifyContent: 'space-between',
    display: 'flex',
    width: '100%',
    marginBottom: '20px',
    paddingLeft: '20px',
    paddingRight: '550px',
  },
  heartButton: {
    fontSize: '24px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    padding: 0,
    marginLeft: '10px',
  },
  songImage: {
    width: '50px',
    height: '50px',
    marginLeft: '10px',
    borderRadius: '5px',
  },
};