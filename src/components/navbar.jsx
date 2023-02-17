import React, { useEffect, useState } from "react";
import {
  faHouse,
  faMagnifyingGlass,
  faPlus,
  faStar,
  faVideoCamera,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { Menu, Transition } from "@headlessui/react";
import { toast } from "react-hot-toast";

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  console.log(user);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="sticky h-[72px] bg-[#0e0b14] px-9 flex items-center place-content-between">
      <div className="flex items-center gap-10 text-sm font-bold cursor-pointer">
        <img
          onClick={() => navigate("/")}
          src="https://cdn.worldvectorlogo.com/logos/disney--1.svg"
          alt="Disney SVG"
          className="h-12"
        />

        <div
          onClick={() => navigate("/")}
          className="text-white cursor-pointer lg:gap-4 items-center flex hover:scale-110 duration-200"
        >
          <FontAwesomeIcon icon={faHouse} />
          <div className="hidden lg:block">ANA SAYFA</div>
        </div>
        <div
          onClick={() => navigate("/search")}
          className="text-white cursor-pointer lg:gap-4 items-center flex hover:scale-110 duration-200"
        >
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
      {/* {user === null ? (
        <div
          onClick={() => navigate("/login")}
          className="bg-gray-800 hover:bg-gray-700 duration-300 py-4 font-semibold rounded-md px-6 text-white cursor-pointer"
        >
          Giriş yap
        </div>
      ) : (
        <Menu as="div" className="z-40 ">
          <Menu.Button className="text-white bg-[#1D202D] w-48 text-left p-2 duration-300 rounded-md">
            <div className="flex items-center gap-x-4 ">
              <div className="invisible lg:visible grid items-center justify-center">
                <div>{user.email}</div>
              </div>
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt=""
                className="h-12 rounded-full"
              />
            </div>
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="text-white  bg-[#1D202D] relative">
              <Menu.Item className="text-white bg-[#1D202D] absolute w-48 p-2">
                {({ active }) => (
                  <a
                    className={`${active && "bg-blue-500"} block `}
                    href="/account-settings"
                  >
                    Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item className="text-white absolute w-48 bg-[#1D202D] p-2 ">
                {({ active }) => (
                  <a className={`${active && "bg-blue-500"} block `}>
                    Çıkış Yap
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      )} */}
      {/* <Menu as="div" className="relative z-40 ">
        <Menu.Button className="text-white right-0 w-48 text-left">
          More
        </Menu.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className="text-white absolute right-0 w-48">
            <Menu.Item className="text-white">
              {({ active }) => (
                <a
                  className={`${active && "bg-blue-500"} block`}
                  href="/account-settings"
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item className="text-white">
              {({ active }) => (
                <a
                  className={`${active && "bg-blue-500"} block`}
                  href="/account-settings"
                >
                  Documentation
                </a>
              )}
            </Menu.Item>
            <Menu.Item disabled className="text-white">
              <span className="opacity-75">Invite a friend (coming soon!)</span>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu> */}
      <div className="text-white flex items-center gap-4 cursor-pointer ">
        {user === null ? (
          <div
            onClick={() => navigate("/login")}
            className="bg-gray-800 hover:bg-gray-700 duration-300 py-4 font-semibold rounded-md px-6"
          >
            Giriş yap
          </div>
        ) : (
          <div
            className="flex items-center gap-x-4 hover:bg-[#1D202D] py-2 px-6 rounded-md duration-300"
            onClick={() => {
              navigate("/profile");
            }}
          >
            <div className="invisible lg:visible grid items-center justify-center">
              <div>{user.email}</div>
              <button
                onClick={handleLogout}
                className="text-sm text-gray-400 hover:text-gray-300 duration-100"
              >
                çıkış yap
              </button>
            </div>
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt=""
              className="h-12 rounded-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}
