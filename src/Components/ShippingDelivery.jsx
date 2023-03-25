import React from 'react'

const ShippingDelivery = () => {
  return (
    <>
    <div className='h-screen bg-[#F6F2E4] grid grid-cols-3'>
    {/* Left */}
    <div className="flex flex-col basis-2/3 col-span-2 bg-slate-300 px-10 font-['Poppins'] text-[#7D794F]">
        <div className='flex flex-2 bg-red-300 py-10'>
           Pagination 
        </div>
        <div className='flex flex-col flex-1 bg-yellow-200'>
            <div className='font-bold text-5xl tracking-widest'>
                Contacts
            </div>
            <div className='grid bg-pink-300 grid-cols-2 w-full h-full'>
                <input type='text' placeholder='First Name' className='border-b-2 border-[#7D794F]'/>
                <input type='text'/>
                <input type='text'/>
                <input type='text'/>
            </div> 
        </div>
        <div className='flex flex-1 bg-slate-100'>
            Shipping Address
        </div>
        </div>
    <div className='flex basis-1/3 bg-purple-300 justify-end item place-items-center'>
       <div className='flex bg-white h-3/4 items-center w-full ml-5'>
        Receipt
       </div> 
    </div>
    </div>
    {/* Right */}

    <div className='h-96 bg-green-300'>
            Payment
        </div>
    </>

  )
}

export default ShippingDelivery
