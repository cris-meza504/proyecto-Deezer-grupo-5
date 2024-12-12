import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useUser } from "./UserContext"; // Importa el contexto de usuario

// Crear el contexto de la lista de reproducción
const PlaylistContext = createContext();

// Componente proveedor para envolver la aplicación
export const PlaylistProvider = ({ children }) => {
  const { user } = useUser(); // Accede al usuario actual desde el contexto
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
    const cod_user = parseInt(localStorage.getItem("aristo"))
    if (currentSong && user) {  // Asegurarse de que hay una canción actual y un usuario
      // Realiza la solicitud para guardar la canción en el historial
      const saveHistory = async () => {

        try {
          await axios.post("http://localhost:8000/historial", {
            user_id: 1, // Usar el id del usuario desde el contexto
            song_id: 2,
          });
          console.log("Historial guardado correctamente");
        } catch (error) {
          console.error("Error al guardar historial", error, cod_user, "aaa:", currentSong.codigo_cancion);
        }
      };
      
      saveHistory();
    }
  }, [currentSong, user]); // Solo se ejecutará cuando currentSong cambie y haya un usuario

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