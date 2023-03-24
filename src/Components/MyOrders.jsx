import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MyOrders = () => {
  return (
    <>
    <div>
    {/* navbar */}
      <div className='flex flex-row w-full bg-red-300'>
        <div>
          All
        </div>
        <div>
          To Pay 
        </div>
        <div>
          To Ship 
        </div>
        <div>
          To Receive
        </div>
        <div>
          Completed
        </div>
      </div>
    {/* Outlet */}
    <div>
      
    </div>
    </div>
    </>
   
  ) 
}

export default MyOrders
