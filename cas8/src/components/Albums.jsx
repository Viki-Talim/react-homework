import { useContext } from "react";
import { AlbumsContext } from "../utils/AlbumsContext";

export const Albums = () => {
  const albums = useContext(AlbumsContext);

  return (
    <div id="albums">
      <h2>Albums</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
};
