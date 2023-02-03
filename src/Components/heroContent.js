import React from "react";
import bgImg from "../Assets/bg.svg";
// import FormLogin from "./formLogin.js";

const HeroContent = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center w-full h-[100vh] relative items-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      {/*Content*/}
      <div className="absolute top-0 container mx-auto h-full px-4 items-center flex justify-between">
        {/*Content kiri*/}
        <div className="container flex-col items-center w-full font-Poppins text-white pl-20">
          <div className="text-base pb-3">100% Made in Italy top quality.</div>
          <h1 className="text-3xl font-bold pb-6">
            Hotel Amenities Solutions.
          </h1>
          <button className="items-center flex text-[#7D794F] bg-white border border-white hover:shadow-inner hover:border hover:border-white hover:bg-transparent hover:text-white px-11 py-2">
            Shop
          </button>
        </div>
        {/*Content kanan*/}
        <div className="top-0 flex justify-end items-center w-[100vw] h-[100vh]">
          {/* <FormLogin /> */}
        </div>
      </div>
      {/*Arrow bottom*/}
      <button className="flex-row flex absolute bottom-10 right-20 gap-7 transition hover:translate-x-6 ease-in duration-300">
        <div className="flex text-white font-Poppins">
          Shop Allegrini's Collections
        </div>
        <div className="flex text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
      </button>

      {/* <!-- Asah Punya --> */}
      <div className="bg-ales h-screen w-auto">
        <div className="flex relative">
          <div className="w-[660px] h-[404px]">
            <img
              className="py-8 w-full h-full"
              src="../src/img/Rectangle 7.png"
              alt=""
            />
          </div>

          <div className="absolute bg-white w-[712px] h-[286px] flex flex-col justify-center gap-8 left-[600px] top-[100px] pl-20 border-[2px]">
            <h3 className="text-alestext">
              <b>About Allegrini</b>
            </h3>
            <p className="text-alesph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              in, doloribus magnam nam voluptatum cum expedita laboriosam cumque
              id quia laudantium eos reprehenderit praesentium dolores
              repellendus earum. Architecto, doloribus ex.
            </p>
            <a className="text-alestext" href="erPage">
              <b>
                <u>Read More</u>
              </b>
            </a>
          </div>
        </div>

        <div className="flex">
          <img className="py-16" src="../src/img/Line 1.svg " alt="" />
          <h3 className="py-14 px-6">
            <b>Our Partners</b>
          </h3>
        </div>

        <div className="flex">
          <img className="px-2" src="../src/img/partner1.png" alt="" />
          <img className="px-4" src="../src/img/partner2.png" alt="" />
          <img className="px-6" src="../src/img/partner3.png" alt="" />
          <img className="px-8" src="../src/img/partner4.png" alt="" />
          <img src="../src/img/partner5.png" alt="" />
        </div>
      </div>
      {/* <!-- Asah Punya --> */}
    </div>
  );
};

export default HeroContent;
