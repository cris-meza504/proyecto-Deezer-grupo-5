import React from "react";
import { useParams } from "react-router-dom";

const ArtistDetail = () => {
  const { artistName } = useParams(); // Obtiene el nombre del artista desde la URL

  // Datos simulados para la demostración
  const artistData = {
    name: artistName,
    fans: "2434 fans",
    image: require("../../img/images.jpeg"),
  };

  return (
    <div className="flex flex-col items-center h-full p-8">
      <div className="flex items-center gap-8">
        {/* Imagen del artista */}
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <img
            src={artistData.image}
            alt={artistData.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Información del artista */}
        <div>
          <h1 className="text-4xl font-bold text-white">{artistData.name}</h1>
          <p className="text-gray-400">{artistData.fans}</p>
          {/* Botones */}
          <div className="flex items-center gap-4 mt-4">
            <button className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition">
              Mix
            </button>
            <button className="text-gray-400 hover:text-white transition">
              ❤️
            </button>
            <button className="text-gray-400 hover:text-white transition">
              ⋯
            </button>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div className="mt-8 w-full">
        <div className="flex gap-6 text-gray-400 border-b border-gray-700 pb-2">
          <button>Discografía</button>
          <button>Top canciones</button>
          <button>Artistas similares</button>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
