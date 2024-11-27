import React from "react";

const albums = [
  {
    id: 1,
    title: "50//50",
    artist: "Vantage",
    releaseDate: "21/08/2020",
    image: require("../../img/505.jpeg"), // Cambia esto por la URL real de la imagen
  },
  {
    id: 2,
    title: "50/50",
    artist: "La Ross Maria",
    releaseDate: "13/08/2021",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    title: "Flow Malandro, Vol. 1",
    artist: "5050 EL BARRET",
    releaseDate: "03/11/2018",
    explicit: true,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    title: "Tu Eres Otro Pex (Da Players Town)",
    artist: "5050",
    releaseDate: "09/11/2016",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    title: "50/50",
    artist: "Al Kooper",
    releaseDate: "12/02/2009",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    title: "Patas Muertas Ciclón 232",
    artist: "5050 Flow Malandro",
    releaseDate: "10/02/2023",
    explicit: true,
    image: "https://via.placeholder.com/100",
  },
];

const Albums = () => {
  return (
    <div className="p-4 bg-black text-white h-full overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Álbumes</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {albums.map((album) => (
          <div
            key={album.id}
            className="bg-black p-2 rounded-lg hover:bg-gray-700 transition"
          >
            <img
              src={album.image}
              alt={album.title}
              className="w-20 h-20 rounded-md mb-2 mx-auto"
            />
            <h3 className="text-sm font-medium text-center">{album.title}</h3>
            <p className="text-xs text-gray-400 text-center">{album.artist}</p>
            <p className="text-xs text-gray-500 text-center">
              Publicado el {album.releaseDate}
            </p>
            {album.explicit && (
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

export default Albums;
