import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function MainCarousel() {
  const [primary, setPrimary] = useState(0);
  const [isHovering, setIsHovering] = useState(0);

  const handleMouseOver = (num) => {
    setIsHovering(num);
  };

  const handleMouseOut = (num) => {
    setIsHovering(num);
  };

  return (
    <div className="">
      <div className="shadow-2xl">
        {" "}
        <Carousel
          className="my-10"
          autoPlay="true"
          centerMode="true"
          centerSlidePercentage={80}
          infiniteLoop="true"
          showThumbs={false}
          selectedItem={primary}
          // onChange={() => setPrimary(this.selectedItem)}
          // selectedItem
        >
          <div
            className={`relative  duration-200 mx-4 cursor-pointer hover:scale-110 z-10 `}
            onClick={() => setPrimary(0)}
          >
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E53A80731FCE401B15C7031D0E69A90E340F8FA60F8DA788159A869E71C2A8F4/compose?width=1440&aspectRatio=3.91&format=jpeg&label=391_scrim"
              alt="familyguy"
            />
            <p className="top-40 left-32 absolute text-7xl font-bold text-white">
              FAMILY GUY
            </p>
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div
            className={`relative  duration-200 mx-4 cursor-pointer hover:scale-110 z-10 `}
            onClick={() => setPrimary(1)}
          >
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EDC670EA88F660822AECD8D3FFA4B3D3D1E666BCDC86F6D79DB11BE78565E26D/compose?width=1440&aspectRatio=3.91&format=jpeg&label=georiginal_391_scrim"
              alt="extraordinary"
            />
            <p className="top-40 left-8 absolute text-7xl font-bold text-white">
              EXTRAORDINARY
            </p>
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div
            className={`relative duration-200 mx-4 cursor-pointer hover:scale-110 z-10 `}
            onClick={() => setPrimary(2)}
          >
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D119042E56A928CFA86A5E5D2E2E74F53932E2E1DA604143456E1B5F8F8FBC16/compose?width=1440&aspectRatio=3.91&format=jpeg&label=391_scrim"
              alt="thewalkingdead"
            />
            <p className="top-36 left-24 absolute text-4xl font-bold text-white">
              THE
            </p>
            <p className="top-44 left-8 absolute text-7xl font-bold text-white">
              WALKING DEAD
            </p>
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>
      </div>
      <div className="mx-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:grid-cols-4 2xl:grid-cols-5 gap-6 bg-[#1A1D29]">
          <div
            className="bg-gradient-to-b from-[#30323E] to-[#1E1F2A] relative shadow-2xl shadow-black rounded-md hover:scale-105 duration-200 cursor-pointer"
            onMouseOver={() => handleMouseOver(1)}
            onMouseOut={() => handleMouseOut(0)}
          >
            <img
              className={`z-10 ${
                isHovering === 1
                  ? `absolute`
                  : `border-neutral-700 border-2 rounded-md`
              }`} //IMAGE'E ABSOLUTE EKLEMEM LAZIM AMA EKLEYİNCE HER ŞEY BOZULUYOR
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=640&aspectRatio=1.78&format=png"
              alt="disney"
            />
            {isHovering === 1 ? (
              <video
                autoPlay
                loop
                // width={320}
                // height={240}
                muted
                className="absolute top-0 rounded-md scale-105 duration-200 ease-in "
              >
                <source
                  src="https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217865-disney.mp4"
                  type="video/mp4"
                />
              </video>
            ) : (
              ""
            )}
          </div>

          <div
            className="bg-gradient-to-b from-[#30323E] to-[#1E1F2A] relative shadow-2xl shadow-black rounded-md hover:scale-105 duration-200 cursor-pointer"
            onMouseOver={() => handleMouseOver(2)}
            onMouseOut={() => handleMouseOut(0)}
          >
            <img
              className={`z-10 ${
                isHovering === 2
                  ? `absolute`
                  : `border-neutral-700 border-2 rounded-md`
              }`}
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=640&aspectRatio=1.78&format=png"
              alt="pixar"
            />
            {isHovering === 2 ? (
              <video
                autoPlay
                loop
                // width={320}
                // height={240}
                muted
                className="absolute top-0 rounded-md scale-105 duration-200 ease-in "
              >
                <source
                  src="https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217992-pixar.mp4"
                  type="video/mp4"
                />
              </video>
            ) : (
              ""
            )}
          </div>

          <div
            className="bg-gradient-to-b from-[#30323E] to-[#1E1F2A] relative shadow-2xl shadow-black rounded-md hover:scale-105 duration-200 cursor-pointer"
            onMouseOver={() => handleMouseOver(3)}
            onMouseOut={() => handleMouseOut(0)}
          >
            <img
              className={`z-10 ${
                isHovering === 3
                  ? `absolute`
                  : `border-neutral-700 border-2 rounded-md`
              }`}
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=640&aspectRatio=1.78&format=png"
              alt="marvel"
            />
            {isHovering === 3 ? (
              <video
                autoPlay
                loop
                // width={320}
                // height={240}
                muted
                className="absolute top-0 rounded-md scale-105 duration-200 ease-in "
              >
                <source
                  src="https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217799-marvel.mp4"
                  type="video/mp4"
                />
              </video>
            ) : (
              ""
            )}
          </div>

          <div
            className="bg-gradient-to-b from-[#30323E] to-[#1E1F2A] relative shadow-2xl shadow-black rounded-md hover:scale-105 duration-200 cursor-pointer"
            onMouseOver={() => handleMouseOver(4)}
            onMouseOut={() => handleMouseOut(0)}
          >
            <img
              className={`z-10 ${
                isHovering === 4
                  ? `absolute`
                  : `border-neutral-700 border-2 rounded-md`
              }`}
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=640&aspectRatio=1.78&format=png"
              alt="star wars"
            />
            {isHovering === 4 ? (
              <video
                autoPlay
                loop
                // width={320}
                // height={240}
                muted
                className="absolute top-0 rounded-md scale-105 duration-200 ease-in "
              >
                <source
                  src="https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2020/12/17/1608229334-star-wars.mp4"
                  type="video/mp4"
                />
              </video>
            ) : (
              ""
            )}
          </div>

          <div
            className="bg-gradient-to-b from-[#30323E] to-[#1E1F2A] relative shadow-2xl shadow-black rounded-md hover:scale-105 duration-200 cursor-pointer"
            onMouseOver={() => handleMouseOver(5)}
            onMouseOut={() => handleMouseOut(0)}
          >
            <img
              className={`z-10 ${
                isHovering === 5
                  ? `absolute`
                  : `border-neutral-700 border-2 rounded-md`
              }`}
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2EF24AA0A1E648E6D1A3B26491F516632137ED87AB22969D153316F8BD670FB5/scale?width=640&aspectRatio=1.78&format=png"
              alt="national geographic"
            />
            {isHovering === 5 ? (
              <video
                autoPlay
                loop
                // width={320}
                // height={240}
                muted
                className="absolute top-0 rounded-md scale-105 duration-200 ease-in "
              >
                <source
                  src="https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217923-national-geographic.mp4"
                  type="video/mp4"
                />
              </video>
            ) : (
              ""
            )}
          </div>

          {/* <div className="bg-gray-500">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=640&aspectRatio=1.78&format=png"
              alt=""
            />
          </div> */}
          {/* <div className="bg-gray-500">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=640&aspectRatio=1.78&format=png"
              alt=""
            />
          </div> */}
          {/* <div className="bg-gray-500">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=640&aspectRatio=1.78&format=png"
              alt=""
            />
          </div> */}
          {/* <div className="bg-gray-500">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2EF24AA0A1E648E6D1A3B26491F516632137ED87AB22969D153316F8BD670FB5/scale?width=640&aspectRatio=1.78&format=png"
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
