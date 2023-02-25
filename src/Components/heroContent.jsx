/** @format */

import React from "react";
import bgImg from "../Assets/bg.svg";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

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
          <Link to="/product">
            <button className="items-center flex text-[#7D794F] bg-white border border-white hover:shadow-inner hover:border hover:border-white hover:bg-transparent hover:text-white px-11 py-2">
              Shop
            </button>
          </Link>
        </div>
        {/*Content kanan*/}
        <div className="top-0 flex justify-end items-center w-[100vw] h-[100vh]">
          {/* <FormLogin /> */}
          <Outlet />
        </div>
      </div>
      {/*arrow bottom*/}
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
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default HeroContent;
