import React from "react";
import {
  faHouse,
  faMagnifyingGlass,
  faPlus,
  faStar,
  faVideoCamera,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function navbar() {
  return (
    <div className="sticky h-[72px] bg-[#0e0b14] px-9 flex items-center place-content-between">
      <div className="flex items-center gap-10 text-sm font-bold">
        <img
          src="https://cdn.worldvectorlogo.com/logos/disney--1.svg"
          alt="Disney SVG"
          className="h-12"
        />

        <div className="text-white cursor-pointer lg:gap-4 items-center flex hover:scale-110 duration-200">
          <FontAwesomeIcon icon={faHouse} />
          <div className="hidden lg:block">ANA SAYFA</div>
        </div>
        <div className="text-white cursor-pointer lg:gap-4 items-center flex hover:scale-110 duration-200">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <div className="hidden lg:block">ARAMA</div>
        </div>
        <div className="text-white cursor-pointer lg:gap-4 items-center flex hover:scale-110 duration-200">
          <FontAwesomeIcon icon={faPlus} />
          <div className="hidden lg:block">İZLEME LİSTEM</div>
        </div>
        <div className="text-white cursor-pointer lg:gap-4 items-center flex hover:scale-110 duration-200">
          <FontAwesomeIcon icon={faStar} />
          <div className="hidden lg:block">ORIGINALS</div>
        </div>
        <div className="text-white cursor-pointer lg:gap-4 items-center flex hover:scale-110 duration-200">
          <FontAwesomeIcon icon={faVideoCamera} />
          <div className="hidden lg:block">FİLMLER</div>
        </div>
        <div className="text-white cursor-pointer lg:gap-4 items-center flex hover:scale-110 duration-200">
          <FontAwesomeIcon icon={faTv} />
          <div className="hidden lg:block">DİZİLER</div>
        </div>
      </div>
      <div className="text-white flex items-center gap-4 cursor-pointer">
        <span className="invisible lg:visible">Kerem Ersoy</span>
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt=""
          className="h-12 rounded-full"
        />
      </div>
    </div>
  );
}
