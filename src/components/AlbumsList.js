import React from "react";
import Album from "./Album.js";
import Albums from "./mock/Albums.js";

const AlbumsList = () => {
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
