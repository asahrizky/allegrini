import React, {useState} from "react";
import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";
import Elips from "../Assets/Elips.png"
import BodyWash from "../Assets/Bodywash.svg"
import candle from "../Assets/candle.svg"
import Haircon from "../Assets/HairConditioner.png"


const NavbarProfile2 = () => {

const [showLogout, setShowLogout] = useState(false);
const [showCart, setShowCart] = useState(false);
    
  return (
    
    <nav className='sticky z-[10] w-full bg-[#7D794F]'>
        <div className="items-center container mx-auto w-full pl-4 py-4  grid grid-cols-3">
            {/* Navbar kiri */}
            <div className="flex items-center gap-24 font-['Poppins'] text-white text-lg ">
                <button className="hover:text-[#AE9A64]">
                    <a href="#slider">About</a>
                </button>
                <button className="hover:text-[#AE9A64]">
                    <a href="#Collection">Collections</a>
                </button>
                <button className="hover:text-[#AE9A64]">
                    <a href="#ContactUs">Contacts</a>
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
                <button className="hover:text-[#AE9A64]" onClick={()=> setShowCart(true)}>
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
                            <button className="px-5 py-3 hover:bg-gray-200" onClick={()=> setShowLogout(true)} >Logout</button> 
                        </div> 
            </div>
            </div>  
            {showLogout ? (
                 <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                        <div className=" w-full flex justify-center h-1/2 items-center">
                            <div className="relative border-0 rounded-xl shadow-lg flex flex-col h-80 w-max bg-white">
                                <div className="flex justify-center pt-8 px-5 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><g transform="rotate(180 12 12)"><path fill="none" stroke="#7d794f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12h-9.5m7.5 3l3-3l-3-3m-5-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-1"/></g></svg>
                                </div>
                                <div className="flex pt-10 text-xl font-['Poppins'] text-[#7D794F] font-bold text-center px-10 place-items-end ">
                                    Are you sure you want to log out?
                                </div>
                                <div className="flex py-3 pb-8 justify-center font-['Poppins'] text-sm  text-[#A4A282]">
                                    You can always log back in anytime
                                </div>
                                {/* Buttons */}
                                <div className="flex gap-3 pb-3 items-center justify-center font-['Poppins']">
                                    <button className="flex-1 bg-[#7D794F] text-white rounded-full py-2 px-10 ml-8 hover:shadow-lg hover:bg-[#A4A282]" onClick={() => setShowLogout(false)}>
                                        Cancel
                                    </button>
                                    <Link to="/" className="flex-1 bg-white text-[#7D794F] border-2 border-[#7D794F] rounded-full py-2 px-10 mr-8 hover:shadow-lg hover:bg-[#A4A282] hover:text-white hover:border-[#A4A282] text-center">
                                        Yes
                                    </Link>
                                </div>
                            <div className=" flex absolute inset-x-0 justify-center  bg-gray-200">
                            </div>
                            </div>  
                        </div>
                    </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null} 

            {showCart ? (
                <>
                    <div className="justify-end items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 ">
                    <div className="flex flex-col bg-[#F5F4EF] h-screen w-1/2 justify-start px-10 py-8 font-['Poppins'] animate-trans">
                    {/* Header */}
                    <div className="text-[#7D794F] text-5xl font-bold tracking-widest pb-5 flex basis-1/6 items-center justify-between">
                        Shopping Cart
                        <button onClick={()=> setShowCart(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#7d794f" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
                        </button>
                    </div>
                    <div className="flex flex-col basis h-4/6 overflow-y-auto overscroll-contain">
                        <div className="flex flex-col ">
                        {/* item1 */}
                         <div className=" h-60 flex">
                            <div className="flex basis-1/3 h-full items-center justify-start relative">
                                <img className="h-full absolute" src={Elips}/>
                                <img className="h-max relative left-12" src={BodyWash}/>
                            </div>
                            <div className="flex flex-col basis-2/3 justify-start h-full">
                                <div className="grid grid-cols-2 basis-2/3 ">
                                    <div className="flex font-semibold text-black text-xl items-center">
                                        Hair, Hand and Body Wash
                                    </div>
                                    <button className="flex underline justify-end text-[#6E7E2B] items-center">
                                        Remove
                                    </button>
                                    <div className="flex">
                                        500 ml
                                    </div>
                                </div>
                                <div className="flex justify-between basis-1/3 text-[#7D794F] font-semibold text-lg" >
                                <div className="">
                                    Price
                                </div>
                                <div className=" text-black font-normal">
                                    9,00 €
                                </div>
                                </div>
                                <div className="flex basis-1/3 gap-3 border-t-2 border-[#AAA183]/50 items-center font-semibold text-[#7D794F] text-lg">
                                    Quantity
                                    <input
                                        type="number"
                                        className="w-14 border-2 border-[#AAA183]/50 ">
                                    </input>
                                </div>
                            </div>
                         </div>
                         {/* item2 */}
                         <div className=" h-60 flex">
                            <div className="flex basis-1/3 h-full items-center justify-start relative">
                                <img className="h-full left-3 absolute" src={Elips}/>
                                <img className="h-max relative left-10" src={candle}/>
                            </div>
                            <div className="flex flex-col basis-2/3 justify-start h-full">
                                <div className="grid grid-cols-2 basis-2/3 ">
                                    <div className="flex font-semibold text-black text-xl items-center">
                                        Scented Candle
                                    </div>
                                    <button className="flex underline justify-end text-[#6E7E2B] items-center">
                                        Remove
                                    </button>
                                    <div className="flex">
                                        500 ml
                                    </div>
                                </div>
                                <div className="flex justify-between basis-1/3 text-[#7D794F] font-semibold text-lg" >
                                <div className="">
                                    Price
                                </div>
                                <div className=" text-black font-normal">
                                    24,90 €
                                </div>
                                </div>
                                <div className="flex basis-1/3 gap-3 border-t-2 border-[#AAA183]/50 items-center font-semibold text-[#7D794F] text-lg">
                                    Quantity
                                    <input
                                        type="number"
                                        className="w-14 border-2 border-[#AAA183]/50 ">
                                    </input>
                                </div>
                            </div>
                         </div>
                         {/* item3 */}
                         <div className=" h-60 flex">
                            <div className="flex basis-1/3 h-full items-center justify-start relative">
                                <img className="h-full left-3 absolute" src={Elips}/>
                                <img className="h-max relative left-16" src={Haircon}/>
                            </div>
                            <div className="flex flex-col basis-2/3 justify-start h-full">
                                <div className="grid grid-cols-2 basis-2/3 ">
                                    <div className="flex font-semibold text-black text-xl items-center">
                                        Hair Conditioner
                                    </div>
                                    <button className="flex underline justify-end text-[#6E7E2B] items-center">
                                        Remove
                                    </button>
                                    <div className="flex">
                                        30 ml
                                    </div>
                                </div>
                                <div className="flex justify-between basis-1/3 text-[#7D794F] font-semibold text-lg" >
                                <div className="">
                                    Price
                                </div>
                                <div className=" text-black font-normal">
                                    4,00 €
                                </div>
                                </div>
                                <div className="flex basis-1/3 gap-3 border-t-2 border-[#AAA183]/50 items-center font-semibold text-[#7D794F] text-lg">
                                    Quantity
                                    <input
                                        type="number"
                                        className="w-14 border-2 border-[#AAA183]/50 ">
                                    </input>
                                </div>
                            </div>
                         </div>
                        </div>
                    </div>
                    <div className="flex flex-col basis-1/4 justify-center gap-7 border-t-2 border-[#7D794F] text-xl">
                        <div className="flex justify-between font-semibold ">
                            <div>
                                Total
                            </div>
                            <div>
                                33,90 €
                            </div>
                        </div>
                        <div className=" text-[#7D794F] flex justify-between">
                        <div>
                            Shipping
                        </div>
                        <div>
                            Calculated at checkout
                        </div>
                        </div>
                        </div>
                    <div className="flex flex-col basis 1/6  gap-3 py-5">
                        <button className="flex place-content-center py-3 bg-[#7D794F]/70 text-[#F6F2E4] hover:bg-transparent hover:text-[#7D794F] border-2 border-[#7D794F]/70 hover:border-[#7D794F]/70">
                            Checkout
                        </button>
                        <button className="bg-[#F6F2E4] flex place-content-center py-3 border-2 border-[#7D794F]/70 text-[#7D794F]/70 hover:text-white hover:bg-[#7D794F]/70">
                            Go To Shopping Cart
                        </button>
                    </div>
                    </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> 
                </>

            ) : null}
    </nav>
  )
}

export default NavbarProfile2;
