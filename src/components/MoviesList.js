import React from "react";
import Movies from "../mock/Movie.js";

function MoviesList() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <Movie />
      </div>
    </div>
  );
}

export default MoviesList;
