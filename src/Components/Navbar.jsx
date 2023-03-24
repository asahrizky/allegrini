import React, { useEffect, useState } from "react";
import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";


const Navbar = () => {
   
  const [scroll, setScroll] = useState (window.scrollY) ;

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    } ;

  }, []);

  

  return (
    <div>
      <nav id="Navbar" className={`fixed z-[9999] w-full mb-20 ${scroll > 50 && "bg-[#7D794F]"}`}>
        <div className="flex justify-between items-center container mx-auto w-full pl-4 py-4">
          <div className="flex items-center gap-24 font-['Poppins'] text-white text-lg">
            <button className="hover:text-[#AE9A64] transition ease-in-out duration-300">
              <a href="#slider">About</a>
            </button>
            <button className="hover:text-[#AE9A64] transition ease-in-out duration-300">
            <a href="#Collection">Collections</a>
            </button>
            <button className="hover:text-[#AE9A64] transition ease-in-out duration-300">
            <a href="#ContactUs">Contacts</a>
            </button>
          </div>

          <Link to= '/' className="flex items-center max-w-full h-auto">
              <img src={logo} alt="Logo" />
          </Link>

          <div className="flex items-center gap-8 font-['Poppins'] text-white text-base">
            <Link to= 'Login'
              className="hover:text-[#AE9A64] hover:bg-white hover:border h-10 w-32 px-8 py-2 transition ease-in duration-200 text-center">
              Login
            </Link>
            <Link to='SignUp' className="items-center box-border h-10 w-32 px-8 py-2 border hover:text-[#AE9A64] hover:border-[#AE9A64] hover:bg-white transition ease-in duration-200">
               Sign up
            </Link>
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
