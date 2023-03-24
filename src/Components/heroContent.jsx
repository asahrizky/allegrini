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
      <div className={`absolute top-0 mx-auto h-full w-full px-4 items-center flex justify-end ${location !== "/" && location !== "/SignedIn" && "backdrop-blur-sm"}`}>
        {/*Content kiri*/}
        <div className="flex flex-col flex-1 justify-center w-full h-full font-['Poppins'] text-white pl-20 " >
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
      <button className="flex-row flex absolute bottom-10 right-20 gap-7 hover:translate-x-6 transition ease-in duration-300">
        <div className="flex text-white font-['Poppins']">
          Shop Allegrini's Collections
        </div>
        <div className="flex text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.3 19.3q-.275-.275-.288-.7t.263-.7l4.9-4.9H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.175l-4.9-4.9q-.275-.275-.263-.7t.288-.7q.275-.275.7-.275t.7.275l6.6 6.6q.15.125.213.313t.062.387q0 .2-.062.375t-.213.325l-6.6 6.6q-.275.275-.7.275t-.7-.275Z"/></svg>
        </div>
      </button>
    </div>
  ); console.log(location !== "/" || location !== "/SignedIn")
};



export default HeroContent;
