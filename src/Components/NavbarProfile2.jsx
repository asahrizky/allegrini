import React, { useEffect,useState } from "react";
import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";

const NavbarProfile2 = () => {
    
  return (
    
    <nav className='fixed z-[10] w-full bg-[#7D794F]'>
        <div className="items-center container mx-auto w-full pl-4 py-4  grid grid-cols-3">
            {/* Navbar kiri */}
            <div className="flex items-center gap-24 font-['Poppins'] text-white text-lg ">
                <button className="hover:text-[#AE9A64]">
                    <a href="#slider">About</a>
                </button>
                <button className="hover:text-[#AE9A64]">
                    Collections
                </button>
                <button className="hover:text-[#AE9A64]">
                    Contacts
                </button>
            </div>
            {/* Navbar tengah */}
            <Link to= '/SignedIn' className="flex justify-end">
                <div className="pr-10">
                    <img src={logo} alt="Logo"/>
                </div>
            </Link>
            {/* Navbar Kanan */}
            <div className="flex items-center gap-8 font-['Poppins'] text-white text-base  justify-end relative">
                {/* Icon love */}
                <Link to='/ProfilePage/Wishlist' className="hover:text-[#AE9A64] hover:fill-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>                              
                </Link>
                {/* Icon cart */}
                <button className="hover:text-[#AE9A64]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="m216 64l-12.2 66.9a15.9 15.9 0 0 1-15.7 13.1H62.5L48 64Z" opacity=".2"/><path fill="currentColor" d="m211.7 132.3l12.2-66.9a7.7 7.7 0 0 0-1.8-6.5A7.9 7.9 0 0 0 216 56H54.7l-4.9-26.9A16 16 0 0 0 34.1 16H16a8 8 0 0 0 0 16h18.1l27.4 151a28 28 0 1 0 43.8 9h53.4a28 28 0 1 0 25.3-16H76.5l-4.4-24h116a24 24 0 0 0 23.6-19.7ZM92 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm104 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12ZM57.6 72h148.8L196 129.4a8 8 0 0 1-7.9 6.6H69.2Z"/></svg>
                </button>
                {/* Icon User */}
                    <div className="flex flex-row gap-4 items-center group peer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11Z" className=" group-hover:text-[#d4d0be]"/></svg>
                        <span className=" font-['Poppins'] text-white text-base group-hover:text-[#d4d0be] active:text-[#7D794F]">Hi! Jasmine</span>
                    </div>
                    <div class="hidden peer-hover:flex hover:flex absolute
                        w-auto text-center flex-col bg-white drop-shadow-lg top-10  transition ease-in duration-200 text-[#7D794F]">
                            <Link to='/ProfilePage/PersonalInfo' className="px-5 py-3 hover:bg-gray-200">Personal Info</Link>
                            <Link to='/ProfilePage/MyOrders' className="px-5 py-3 hover:bg-gray-200">My Orders</Link>
                            <Link to='/ProfilePage/Wishlist' className="px-5 py-3 hover:bg-gray-200">Wishlist</Link>
                            <Link to='/ProfilePage/Logout' className="px-5 py-3 hover:bg-gray-200">Logout</Link> 
                        </div> 
            </div>
            </div>  
    </nav>
  )
}

export default NavbarProfile2;
