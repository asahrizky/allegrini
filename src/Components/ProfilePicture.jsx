import React from 'react'
import  pfp from '../Assets/pfp.png'
import {Link} from "react-router-dom"

const ProfilePicture = () => {
  return (
    <div className='flex h-1/3 bg-[#F6F2E4] relative'>
    {/* back button */}
      <Link to='/SignedIn' className='flex left-0 text-[#7D794F] absolute'>
      <button className="hover:text-[#AE9A64] transition ease-in duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-20 h-20"> <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </button>
      </Link>
      <div className='grid grid-cols-2 pl-10 gap-5 h-full '>
      {/* foto */}
        <div className='flex w-full h-full object-contain justify-center items-end'>
            <img className='rounded-full w-60 h-60' src= {pfp} alt="Profile picture" />
        </div>
        {/* Nama */}
        <div className= "flex text-[#7D794F] font-semibold text-5xl font-['Poppins']  text-justify  items-center leading-tight ">
            Jasmine Aubrey
        </div>
      </div>
    </div>
  )
}

export default ProfilePicture
