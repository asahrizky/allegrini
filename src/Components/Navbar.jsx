/** @format */

import React, { useEffect } from "react";
import logo from "../Assets/logo.svg";

function onScrollNavbar() {
  // if (document.documentElement.scrollTop > 50) {
  //   document.getElementById("Navbar").style.backgroundColor = "#7D794F";
  // } else {
  //   document.getElementById("Navbar").style.backgroundColor = "transparent";
  // }
}

const Navbar = () => {
  useEffect(() => {
    window.onscroll = onScrollNavbar;

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div>
      <nav id="Navbar" className="fixed z-[9999] w-full mb-20 bg-alles-500">
        <div className="flex justify-between items-center container mx-auto w-full pl-4 py-4">
          <div className="flex items-center gap-24 font-Poppins text-white text-lg">
            <button className="hover:text-[#AE9A64] transition ease-in-out duration-300">
              <a href="heroPage">About</a>
            </button>
            <button className="hover:text-[#AE9A64] transition ease-in-out duration-300">
              <a href="heroPage">Collections</a>
            </button>
            <button className="hover:text-[#AE9A64] transition ease-in-out duration-300">
              <a href="heroPage">Contacts</a>
            </button>
          </div>

          <button className="flex items-center max-w-full h-auto">
            <a href="heroPage">
              <img src={logo} alt="Logo" />
            </a>
          </button>

          <div className="flex items-center gap-8 font-Poppins text-white text-base">
            <button
              id="loginBtn"
              className="hover:text-[#AE9A64] hover:bg-white hover:border h-10 w-32 px-8 py-2 transition ease-in duration-200">
              <a href="Login.html">Login</a>
            </button>
            <button className="items-center box-border h-10 w-32 px-8 py-2 border hover:text-[#AE9A64] hover:border-[#AE9A64] hover:bg-white transition ease-in duration-200">
              <a href="SignUp.html">Sign up</a>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
