import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const SearchSection = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const data = await fetch(
      query === ""
        ? `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
        : `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
    );
    const allMovies = await data.json();
    // console.log(allMovies.results);
    setMovies(allMovies.results.filter((movie) => movie.backdrop_path));
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="bg-[#1A1D29] min-h-screen">
      <input
        // type="search"
        placeholder="İsim, karakter veya türe göre arayın"
        className="outline-none w-full h-24 bg-gradient-to-t from-[#4B4E5A] to-zinc-700 px-20 placeholder:text-4xl placeholder:font-bold placeholder:text-[#A8A9AD] text-4xl text-white font-bold focus:bg-gradient-to-b focus:from-[#4B4E5A] focus:to-gray-500 focus:placeholder:text-gray-200 duration-300"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="py-12 px-20">
        {query === "" ? (
          <div className="text-xl text-white font-bold">Keşfet</div>
        ) : (
          ""
        )}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:grid-cols-4 2xl:grid-cols-5 gap-6 my-6">
          {movies.length === 0 ? (
            <div className="text-white text-2xl font-bold col-span-5 flex items-center justify-center">
              Şu arama için sonuç bulunamadı:"{query}"
            </div>
          ) : (
            movies
              .filter((movie) => movie.backdrop_path) // filter to show only movies with poster image
              .map((movie) => (
                <div key={movie.id}>
                  <div className="relative shadow-2xl shadow-black rounded-md  cursor-pointer">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                      className="rounded-md hover:scale-105 duration-300"
                      alt=""
                    ></img>
                    <div className="absolute bottom-0 text-white font-semibold backdrop-brightness-50 w-full p-2 rounded-b-md hover:rounded-md duration-300 place-content-between flex">
                      <span>{movie.title}</span>

                      <span className="space-x-2 text-yellow-400">
                        <FontAwesomeIcon icon={faStar} />
                        <span>{movie.vote_average.toString().slice(0, 3)}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
