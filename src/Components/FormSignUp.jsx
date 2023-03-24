import React from 'react'
import {Link} from "react-router-dom";


const FormSignUp = () => {
  return (
    <div className="flex w-full justify-center px-20 h-full items-center">
      <div className="inline-block rounded-[10px] bg-[#F5F4EF] w-full h-[78%] justify-center items-center shadow-2xl">
        <div className="pt-20 font-['Poppins'] text-center text-3xl font-bold text-[#7D794F]">
          Welcome to Allegrini!
        </div>
        <div className="font-['Poppins'] text-center text-[#7D794F] text-xl pt-2">
          Register your account.
        </div>
        <div className="font-['Poppins'] text-[#7D794F] px-20 pt-7">
          <span className="font-bold stroke text-xl">Email </span>
          <div className="py-1 text-base">
            <input
              type="text"
              placeholder="Enter your email"
              className="py-3 px-3 rounded-md w-full border-2 mb-1 border-[#7D794F]/30 placeholder-[#7D794F]/50 focus:outline-none focus:border-[#7D794F] focus:ring-1 focus:ring-[#7D794F]"
            />
          </div>
        </div>
        <div className="font-['Poppins'] text-[#7D794F] text-lg px-20 pt-2">
          <span className="font-bold stroke text-xl">Password </span>
          <div className="py-1 text-base">
            <input
              type="password"
              placeholder="Enter your password"
              className="py-3 px-3 rounded-md w-full border-2 mb-1 border-[#7D794F]/30 placeholder-[#7D794F]/50 focus:outline-none focus:border-[#7D794F] focus:ring-1 focus:ring-[#7D794F]"
            />
          </div>
          <div className="py-1 text-base">
            <input
              type="password"
              placeholder="Confirm your password"
              className="py-3 px-3 rounded-md w-full border-2 mb-1 border-[#7D794F]/30 placeholder-[#7D794F]/50 focus:outline-none focus:border-[#7D794F] focus:ring-1 focus:ring-[#7D794F]"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between gap-6 px-20 font-['Poppins'] text-[#7D794F] text-sm">
          <div className="flex text-left gap-4">
            <input type="checkbox" className="h-6 w-6" />
            <label>
              Creating an account means you agreed to our{" "}
              <a
                href="#"
                className="underline text-[#AE9A64] hover:text-[#7D794F]"
              >
                Terms of Services
              </a>{" "}
              and our{" "}
              <a
                href="#"
                className="underline text-[#AE9A64] hover:text-[#7D794F]"
              >
                Privacy Policy
              </a>
            </label>
          </div>
        </div>
        <div className="flex justify-center items-center pt-6 font-['Poppins'] font-extrabold text-white">
          <Link to = '/Login'
            className="bg-[#6E7E2B] py-4 px-24 rounded-lg drop-shadow-lg focus:translate-y-1 border-[#444e1b] border-b-4 transition ease-in-out duration-300"
          >
            Create an account
          </Link>
        </div>
        <div className="flex justify-center items-center pt-6 ffont-['Poppins'] text-base">
          <span className="pr-3 text-[#7D794F]">Already have an account? </span>
          <Link to = '/Login'
            className="underline text-[#AE9A64] hover:text-[#7D794F]"
          >
            {" "}
            Sign In{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FormSignUp
