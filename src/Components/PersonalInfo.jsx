import React from 'react'

const PersonalInfoContent = () => {
  return (
    <div className='flex flex-col px-20 py-10 gap-16 '>
      <div className="text-[#7D794F] text-7xl font-['Poppins'] font-bold tracking-widest"> 
        Personal Info 
      </div>
      <div className="grid grid-cols-2 font-['Poppins'] text-[#7D794F]/70 text-3xl font-semibold gap-12 pl-14">
      <div className='flex flex-col gap-4'>
         <span>Email address*</span>
         <input 
            type="text"
            placeholder="jasmineaubrey@gmoil.com"
            className="py-4 px-3 w-full border-2 mb-1 border-[#AAA183]/50 placeholder-[#AAA183] focus:outline-none focus:border-[#7D794F] focus:ring-1 focus:ring-[#7D794F] font-normal text-2xl">
         </input>
      </div>
      <div className='flex flex-col gap-4'>
         <span>First Name*</span>
         <input 
            type="text"
            placeholder="Jasmine"
            className="py-4 px-3 w-full border-2 mb-1 border-[#AAA183]/50 placeholder-[#AAA183] focus:outline-none focus:border-[#7D794F] focus:ring-1 focus:ring-[#7D794F] font-normal text-2xl">
         </input>
      </div>
      <div className='flex flex-col gap-4'>
         <span>Phone Number</span>
         <input 
            type="text"
            placeholder="+6281380160000"
            className="py-4 px-3 w-full border-2 mb-1 border-[#AAA183]/50 placeholder-[#AAA183] focus:outline-none focus:border-[#7D794F] focus:ring-1 focus:ring-[#7D794F] font-normal text-2xl">
         </input>
      </div>
      <div className='flex flex-col gap-4'>
         <span>Last Name*</span>
         <input 
            type="text"
            placeholder="Aubrey"
            className="py-4 px-3 w-full border-2 mb-1 border-[#AAA183]/50 placeholder-[#AAA183] focus:outline-none focus:border-[#7D794F] focus:ring-1 focus:ring-[#7D794F] font-normal text-2xl">
         </input>
      </div>
      <div className='flex flex-col'>
         <span className='pb-4'>Password*</span>
         <input 
            type="text"
            placeholder="**********"
            className="py-4 px-3 w-full border-2 mb-1 border-[#AAA183]/50 placeholder-[#AAA183] focus:outline-none focus:border-[#7D794F] focus:ring-1 focus:ring-[#7D794F] font-normal text-2xl">
         </input>
         <button className='underline text-left text-lg font-normal'>Change Password</button>
      </div>
      <div className='flex flex-col gap-4'>
         <span>Date of Birth</span>
         <input 
            type="text"
            placeholder="02-02-2000"
            className="py-4 px-3 w-full border-2 mb-1 border-[#AAA183]/50 placeholder-[#AAA183] focus:outline-none focus:border-[#7D794F] focus:ring-1 focus:ring-[#7D794F] font-normal text-2xl">
         </input>
      </div>
      </div>
      <div className='flex justify-start w-full pl-14'>
         <button className="font-['Poppins'] font-normal text-white bg-[#7D794F] py-4 px-44 drop-shadow-lg focus:translate-y-1 border-[#444e1b] transition ease-in-out duration-300 text-2xl">
            Save Changes
        </button>
      </div>
    </div>
  )
}

export default PersonalInfoContent
