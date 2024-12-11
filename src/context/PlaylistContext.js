import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Crear el contexto de la lista de reproducción
const PlaylistContext = createContext();

// Componente proveedor para envolver la aplicación
export const PlaylistProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null); // Estado global para la canción actual
  const [playlist, setPlaylist] = useState([]); // Estado global para la lista de reproducción

  // Actualiza la canción actual
  const updateCurrentSong = (song) => {
    setCurrentSong(song);
  };

  // Agregar canciones a la lista de reproducción
  const updatePlaylist = (songs) => {
    setPlaylist(songs);
  };

  // Función para cambiar a la siguiente canción
  const playNextSong = () => {
    if (!currentSong || playlist.length === 0) return;

    const currentIndex = playlist.findIndex((song) => song.codigo_cancion === currentSong.codigo_cancion);
    const nextSong = playlist[currentIndex + 1] || playlist[0]; // Si no hay siguiente canción, vuelve al principio

    setCurrentSong(nextSong);
  };

  // Función para cambiar a la canción anterior
  const playPreviousSong = () => {
    if (!currentSong || playlist.length === 0) return;

    const currentIndex = playlist.findIndex((song) => song.codigo_cancion === currentSong.codigo_cancion);
    const previousSong = playlist[currentIndex - 1] || playlist[playlist.length - 1]; // Si no hay anterior, va al final

    setCurrentSong(previousSong);
  };

  // Efecto para guardar el historial cuando cambia la canción actual
  useEffect(() => {
    if (currentSong) {
      // Realiza la solicitud para guardar la canción en el historial
      const saveHistory = async () => {
        try {
          await axios.post("http://localhost:8000/insertar_historial/", {
            codigo_usuario: 1, // Aquí debes usar el id del usuario actual
            codigo_cancion: currentSong.codigo_cancion,
            fecha: new Date().toISOString().split('T')[0], // Fecha actual en formato YYYY-MM-DD
          });
          console.log("Historial guardado correctamente");
        } catch (error) {
          console.error("Error al guardar historial", error);
        }
      };
      
      saveHistory();
    }
  }, [currentSong]); // Solo se ejecutará cuando `currentSong` cambie

  return (
    <PlaylistContext.Provider
      value={{
        currentSong,
        playlist,
        updateCurrentSong,
        updatePlaylist,
        playNextSong,
        playPreviousSong,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

// Custom Hook para acceder al contexto
export const usePlaylist = () => {
  return useContext(PlaylistContext);
};