import React from "react";

const MoreFun = ({ movies }) => {
  return (
    <div className="py-6">
      {/* py-6 */}
      <div className="text-white text-2xl mx-20 mb-4">
        Bu Akşam izlemek İsteyebileceklerin
      </div>
      <div className="relative">
        <img
          className="w-full"
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/859CFDAB4033BC6DB5E630B3FF8BF56B0C28856A19788AFBA13DE2A571BD04C7/compose?width=1440&aspectRatio=4.61&format=jpeg&label=461_scrim"
          alt=""
        />
        <div className="absolute top-24 left-32 text-white text-7xl font-bold flex-row ">
          <div>Daha Fazla</div>
          <div className="flex items-center justify-center">Eğlence</div>
        </div>

        <button className="absolute top-80 left-48 text-white text-xl font-bold bg-[#40424a] hover:bg-zinc-600 rounded-md py-4 px-8 duration-300">
          DAHA FAZLASI
        </button>

        <div className="absolute top-9 right-24 grid grid-cols-5 gap-6">
          {movies.slice(5, 10).map((movie) => {
            return (
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="rounded-md h-80 hover:scale-110 duration-300 cursor-pointer shadow-2xl shadow-black"
                  alt=""
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoreFun;
