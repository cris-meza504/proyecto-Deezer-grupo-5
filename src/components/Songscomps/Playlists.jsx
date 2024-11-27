import React from "react";

const playlist = [
  {
    id: 1,
    title: "alternative",
    numberSong: "20",
    releaseDate: "21/08/2020",
    image: require("../../img/505.jpeg"), // Cambia esto por la URL real de la imagen
  },
  {
    id: 2,
    title: "Sad",
    numberSong: "12",
    releaseDate: "13/08/2021",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    title: "favorite rock",
    numberSong: "30",
    releaseDate: "03/11/2018",
    explicit: true,
    image: "https://via.placeholder.com/100",
  },
];

const Playlists = () => {
  return (
    <div className="p-4 bg-black text-white h-full overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Playlists</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {playlist.map((playlist) => (
          <div
            key={playlist.id}
            className="bg-black p-2 rounded-lg hover:bg-gray-700 transition"
          >
            <img
              src={playlist.image}
              alt={playlist.title}
              className="w-20 h-20 rounded-md mb-2 mx-auto"
            />
            <h3 className="text-sm font-medium text-center">
              {playlist.title}
            </h3>
            <p className="text-xs text-gray-400 text-center">
              Canciones {playlist.numberSong}
            </p>
            <p className="text-xs text-gray-500 text-center">
              Creado el {playlist.releaseDate}
            </p>
            {playlist.explicit && (
              <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full inline-block mt-2">
                Explicit
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlists;
