import React from "react";
import MovieCard from "./MovieCard";
import { MovieData } from "./MovieDB";

function MovieList() {

  return <div className=" grid grid-cols-3 grid-rows-2 pl-20 pt-20 pb-20">
    {MovieData.map((movie) => (
        <MovieCard movie = {movie} />
    ))}
  </div>;
}

export default MovieList;
