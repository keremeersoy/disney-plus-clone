import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const popularMovies = ({ movie }) => {
  return (
    // <div className="shadow-md">
    //   <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
    //   <div className="flex justify-center p-4 h-16 items-center bg-slate-700 text-lg text-white rounded-b-md">
    //     {movie.title}
    //   </div>
    // </div>
    <div className="relative shadow-2xl shadow-black rounded-md  cursor-pointer">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        className="rounded-md hover:scale-105 duration-300"
      ></img>
      <div className="absolute bottom-0 text-white font-semibold backdrop-brightness-50 w-full p-2 rounded-b-md hover:rounded-md duration-300 place-content-between flex">
        <span>{movie.title}</span>

        <span className="space-x-2 text-yellow-400">
          <FontAwesomeIcon icon={faStar} />
          <span>{movie.vote_average.toString().slice(0, 3)}</span>
        </span>
      </div>
    </div>
  );
};

export default popularMovies;
