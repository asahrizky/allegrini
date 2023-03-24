import React from 'react'
import logo from '../Assets/logo.svg'
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <div className="h-full bg-[#7D794F] grid grid-rows-3 px-8 font-['Poppins']">
      <div className=' flex items-center'>
        <img src={logo}/>
      </div>
      <div className=' flex'>
        <div className='flex-1'>
          <div className='text-white font-semibold text-lg pb-5 pt-3 tracking-wider'>
              Socials
            </div>
            {/* social logo */}
            <div className='flex gap-8 pb-10'>
              <Icon icon="mdi:instagram" color="white" width="40"  />
              <Icon icon="mdi:twitter" color="white" width="40"  />
              <Icon icon="ri:facebook-fill" color="white" width="40"  />
              <Icon icon="ic:baseline-whatsapp" color="white" width="40" />
            </div>
        </div>
        <div className='flex-1  text-white flex flex-row gap-28 items-start justify-end pt-5 text-lg'>
          <button> About Allegrini </button>
          <button> Our Collection </button>
          <button> Our Partners </button>
        </div>
      </div>
      <div className='flex text-lg text-white border-t-4'>
        <div className='flex-1 flex items-center'>
          Copyright © 2023 - All right reserved by ACME Industries Ltd  
        </div>
        <div className='flex-1 items-center flex justify-end'>
          <div><button className='underline'>Terms & condition</button> and <button className='underline'>Privacy Policy</button></div>

        </div>
      </div>
      
    </div>
  )
}

export default Footer
