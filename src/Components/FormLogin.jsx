import React from "react";
import { Link } from "react-router-dom";

const FormLogin = () => {
  return (
    <div className="flex w-full justify-center px-20 h-full items-center">
      <div className="inline-block rounded-[10px] bg-[#F5F4EF] w-full h-[78%] justify-center items-center shadow-2xl">
        <div className="pt-16 font-['Poppins'] text-center text-4xl font-bold text-[#7D794F]">
          Welcome back!
        </div>
        <div className="font-['Poppins'] text-center text-[#7D794F] text-xl pt-2">
          Please enter your details.
        </div>
        <div className="font-['Poppins'] text-[#7D794F] px-20 pt-10">
          <span className="font-bold stroke text-xl">Email </span>
          <div className="py-2 text-base">
            <input
              type="text"
              placeholder="Enter your email"
              className="py-4 px-3 rounded-md w-full border-2 mb-1 border-[#7D794F]/30 placeholder-[#7D794F]/50 focus:outline-none focus:border-[#7D794F] focus:ring-1 focus:ring-[#7D794F]"
            />
          </div>
        </div>
        <div className="font-['Poppins'] text-[#7D794F] text-lg px-20 pt-5">
          <span className="font-bold stroke text-xl">Password </span>
          <div className="py-2 text-base">
            <input
              type="text"
              placeholder="Enter your password"
              className="py-4 px-3 rounded-md w-full border-2 mb-1 border-[#7D794F]/30 placeholder-[#7D794F]/50 focus:outline-none focus:border-[#7D794F] focus:ring-1 focus:ring-[#7D794F]"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center text-center gap-6 px-20 font-['Poppins'] text-[#7D794F] pb-2 text-base">
          <div className="flex flex-row font-extrabold gap-4 items-center">
            <input type="checkbox" className="h-4 w-4" />
            <label>Remember me</label>
          </div>
          <button className="hover:underline">Forgot Password</button>
        </div>
        <div className="flex justify-center items-center pt-6 font-['Poppins'] font-extrabold text-white">
          <Link to="/SignedIn" className="bg-[#6E7E2B] py-4 px-44 rounded-lg drop-shadow-lg focus:translate-y-1 border-[#444e1b] border-b-4 transition ease-in-out duration-300">
            Sign In
          </Link>
        </div>
        <div className="flex justify-center items-center pt-6 font-['Poppins'] text-base">
          <span className="pr-3 text-[#7D794F]">Don't have an account? </span>
          <Link to="/SignUp" className="underline text-[#AE9A64] hover:text-[#7D794F]">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
