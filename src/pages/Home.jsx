import "../App.css";
import { useState, useEffect } from "react";
import PopularMovies from "../components/popularMovies";
import Navbar from "../components/navbar";
import MainCarousel from "../components/mainCarousel";
import MoreFun from "../components/moreFun";
import Footer from "../components/footer";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Home() {
  const [movies, setMovies] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;

  const getData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
    );
    const allMovies = await data.json();
    // console.log(allMovies);
    setMovies(allMovies.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App bg-[#1A1D29]">
      <Navbar />
      <MainCarousel />

      <div className="px-20 py-6">
        <div className="text-white text-2xl mb-4">Disney+'ta Yeni</div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:grid-cols-4 2xl:grid-cols-5 gap-6 bg-[#1A1D29] ">
          {movies.slice(0, 5).map((movie) => {
            return <PopularMovies key={movie.id} movie={movie} />;
          })}
        </div>
      </div>

      <MoreFun movies={movies} />

      <div className="px-20 py-6">
        <div className="text-white text-2xl mb-4">Sana Özel Öneriler</div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:grid-cols-4 2xl:grid-cols-5 gap-6 bg-[#1A1D29] ">
          {movies.slice(10, 15).map((movie) => {
            return <PopularMovies key={movie.id} movie={movie} />;
          })}
        </div>
      </div>

      <div className="px-20 pt-6 pb-20">
        <div className="text-white text-2xl mb-4">İzlemeye Devam Et</div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:grid-cols-4 2xl:grid-cols-5 gap-6 bg-[#1A1D29] ">
          {movies.slice(15, 20).map((movie) => {
            return <PopularMovies key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
