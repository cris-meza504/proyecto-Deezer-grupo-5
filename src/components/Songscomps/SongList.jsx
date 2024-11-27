import React from "react";

function SongList() {
  const songs = [
    {
      title: "505",
      artist: "Arctic Monkeys",
      album: "Favourite Worst Nightmare",
      duration: "4:13",
      popularity: 5,
    },
    {
      title: "50/50",
      artist: "La Ross Maria",
      album: "50/50",
      duration: "3:46",
      popularity: 4,
    },
    {
      title: "50/50",
      artist: "Vantage",
      album: "50/50",
      duration: "4:06",
      popularity: 3,
    },
  ];

  return (
    <div className="bg-black text-white flex-grow px-4 py-2">
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
          {songs.map((song, index) => (
            <tr key={index} className="hover:bg-gray-800">
              <td className="p-2">{song.title}</td>
              <td className="p-2">{song.artist}</td>
              <td className="p-2">{song.album}</td>
              <td className="p-2">{song.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SongList;
