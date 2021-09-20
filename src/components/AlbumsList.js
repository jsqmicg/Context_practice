import React, { useContext } from "react";
import AlbumsContext from "../context/AlbumsContext.js";
import Album from "./Album.js";

const AlbumsList = ({ children }) => {
  const { Albums } = useContext(AlbumsContext);
  return (
    <div className="container">
      <div className="row">
        {Albums.map((album) => (
          <div className="col-md-4" key={album.id}>
            <Album album={album} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumsList;
