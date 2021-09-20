import React, { useState } from "react";

function Album({ album }) {
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    setFavorite(true);
  };
  return (
    <div className="card">
      <img src={album.imageUrl} alt={album.title} className="card-img-top" />
      <div className="card-body">
        <h4>{album.title}</h4>
        <button
          className={`btn ${favorite ? "btn-success" : "btn-outline-primary"}`}
          onClick={handleFavorite}
        >
          Favorites
        </button>
      </div>
    </div>
  );
}

export default Album;
