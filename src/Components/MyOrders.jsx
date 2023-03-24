import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MyOrders = () => {
  return (
    <>
    <div>
      <div className='flex flex-row w-full bg-red-300 px-10'>
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
    </div>
    </>
   
  ) 
}

export default MyOrders
