import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MyOrders = () => {
  const navLinkStyles = ({isActive}) =>{
    return {
      fontWeight: isActive ? 'underline': 'none',
    }
  }

  return (
    <>
    <div className='flex h-5/6 flex-col px-10'>
    {/* navbar */}
      <div className="flex basis-1/6 flex-row w-full items-end pb-5 gap-28 font-['Poppins'] text-[#7D794F] font-bold text-xl">
        <Link to='All'>
          All
        </Link>
        <Link to='Pay'>
          To Pay 
        </Link>
        <Link to ='Ship'>
          To Ship 
        </Link>
        <Link to='Received' className=''>
          To Receive
        </Link>
        <Link to='Completed' className=''>
          Completed
        </Link>
      </div>
      {/* Outlet */}
      <div className='flex basis-5/6 bg-yellow-300'>
        <Outlet/>
      </div>
    </div>
    </>
   
  ) 
}

export default MyOrders
