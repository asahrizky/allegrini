import React from 'react'
import  pfp from '../Assets/pfp.png'


const ProfilePicture = () => {
  return (
    <div className='flex h-1/3 bg-[#F6F2E4] relative'>
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
