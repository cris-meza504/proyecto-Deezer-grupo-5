import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { usePlaylist } from "../../context/PlaylistContext"; // Importar el contexto

function SongList() {
  const { searchQuery } = useParams(); // Obtener el término de búsqueda desde la URL
  const [songs, setSongs] = useState([]); // Estado para almacenar las canciones
  const [loading, setLoading] = useState(true); // Estado para indicar carga
  const [error, setError] = useState(""); // Estado para manejar errores

  const { updateCurrentSong, updatePlaylist } = usePlaylist(); // Usar el contexto para actualizar la canción actual y la playlist

  useEffect(() => {
    // Función para obtener las canciones del backend
    const fetchSongs = async () => {
      try {
        setLoading(true); // Iniciar carga
        setError(""); // Limpiar errores previos

        // Construir la URL con el término de búsqueda
        const url = searchQuery
          ? `http://127.0.0.1:8000/searching?search=${encodeURIComponent(searchQuery)}`
          : `http://127.0.0.1:8000/searching`;

        // Hacer la solicitud al backend
        const response = await axios.get(url);

        // Actualizar el estado con las canciones obtenidas
        setSongs(response.data.songs || []); // Asume que el backend devuelve un objeto con un campo "songs"
      } catch (err) {
        // Manejar errores de la solicitud
        setError("Hubo un error al cargar las canciones. Inténtalo de nuevo.");
      } finally {
        setLoading(false); // Finalizar carga
      }
    };

    fetchSongs(); // Llamar a la función para obtener las canciones
  }, [searchQuery]); // Ejecutar cuando cambie el término de búsqueda

  // Función para manejar el clic en una canción
  const handlePlaySong = (song) => {
    updatePlaylist(songs); // Actualizar la playlist global con las canciones encontradas
    updateCurrentSong(song); // Establecer la canción actual
  };

  return (
    <div className="bg-black text-white flex-grow px-4 py-2">
      <h1 className="text-xl mb-4">
        {searchQuery ? `Resultados para: "${searchQuery}"` : "Todas las Canciones"}
      </h1>

      {/* Mostrar estado de carga */}
      {loading && <p>Cargando canciones...</p>}

      {/* Mostrar errores */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Mostrar la tabla de canciones */}
      {!loading && !error && (
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="p-2">Canción</th>
              <th className="p-2">Artista</th>
              <th className="p-2">Álbum</th>
              <th className="p-2">Duración</th>
            </tr>
          </thead>
          <tbody>
            {songs.length > 0 ? (
              songs.map((song) => (
                <tr
                  key={song.codigo_cancion}
                  className="hover:bg-gray-800 cursor-pointer"
                  onClick={() => handlePlaySong(song)} // Llamar a handlePlaySong cuando se hace clic en la canción
                >
                  <td className="p-2 flex items-center">
                    <img
                      src={song.url_foto_portada || '/images/default-song.png'}
                      alt={song.titulo}
                      className="w-10 h-10 mr-2"
                    />
                    {song.titulo}
                  </td>
                  <td className="p-2">{song.nombre_artista}</td>
                  <td className="p-2">{song.album}</td>
                  <td className="p-2">
                    {/* Asegurarse de que la duración sea un número válido antes de llamar a toFixed */}
                    {song.duracion && !isNaN(song.duracion) ? song.duracion.toFixed(2) : "N/A"} mins
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-4">
                  No se encontraron resultados para "{searchQuery}"
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SongList;