import React, { useEffect, useRef } from "react";
// import bgImg from "../Assets/bg.svg";
import bgImg from "../Assets/bg.webp"
import { Link } from "react-router-dom";
import { Outlet, useLocation, useNavigate } from "react-router-dom"; 
// import FormLogin from "./formLogin.js";


const HeroContent = () => {

  const location =  useLocation ().pathname
  console.log(location)

  const login = useRef(null);
  const elm = useRef(null);
  const navigate = useNavigate();

  useEffect (() => {
    const handlePage = (e) => {
     !login.current.contains(e.target) && navigate ("/");
      console.log("ok");
    };

    elm.current.addEventListener ("click", handlePage);
    
  },[]); 
  
 
  
  return (
    <div ref={elm}>
      <div
        className="bg-cover bg-center w-full h-[100vh] relative items-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      {/*Content*/}
      <div className={`absolute top-0 mx-auto h-full w-full px-4 items-center flex justify-end ${location !== "/" && location !== "/ProfilePage" && "backdrop-blur-sm"}`}>
        {/*Content kiri*/}
        <div className="flex flex-col flex-1 justify-center w-full h-full font-Poppins text-white pl-20 " >
          <div className="text-base pb-3">100% Made in Italy top quality.</div>
          <h1 className="text-3xl font-bold pb-6">
            Hotel Amenities Solutions.
          </h1>
          <Link to= "/product">
            <button className="items-center flex text-[#7D794F] bg-white border border-white hover:shadow-inner hover:border hover:border-white hover:bg-transparent hover:text-white px-11 py-2 self-start">
              Shop
            </button>
          </Link>
        </div>
        {/*Content kanan*/}
        <div ref={login} className="flex flex-1 h-full items-center">
          <Outlet/>
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
    </div>
  ); console.log(location !== "/" || location !== "/ProfilePage")
};



export default HeroContent;
