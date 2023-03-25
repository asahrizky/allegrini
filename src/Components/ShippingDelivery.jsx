import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

const ShippingDelivery = () => {
  return (
    <>
    <div className='h-screen bg-[#F6F2E4] grid grid-cols-3'>
    {/* Left */}
    <div className="flex flex-col basis-2/3 col-span-2 px-10 font-['Poppins'] text-[#7D794F]">
        <div className='flex flex-2 font-semibold gap-5 py-10 text-2xl'>
        <div className='flex items-center text-[#AAA18A]'>
            <Link>
                Shopping Cart 
            </Link>
            <Icon icon="material-symbols:arrow-back-ios-rounded" color="#AAA18A" width="40" height="40" hFlip={true} />
        </div>
        <div className='flex items-center'>
            <Link>
                Shipping Delivery 
            </Link>
                <Icon icon="material-symbols:arrow-back-ios-rounded" color="#7d794f" width="40" height="40" hFlip={true} />
        </div>
        <div className='flex items-center text-[#AAA18A]'>
            <Link>
                Payment Method 
            </Link>
                <Icon icon="material-symbols:arrow-back-ios-rounded" color="#AAA18A" width="40" height="40" hFlip={true} />
        </div>
        </div>
        <div className='flex flex-col flex-1 '>
            <div className='font-bold text-5xl tracking-widest'>
                Contacts
            </div>
            <div className='grid grid-cols-2 w-full h-full gap-10 pb-32 items-end text-[#7D794F]'>
                <input type='text' placeholder='First Name' className="flex border-b-2 border-[#7D794F] font-['Poppins'] text-3xl pt-10 bg-[#F6F2E4]"/>
                <input type='text'  placeholder='Last Name' className="flex border-b-2 border-[#7D794F] font-['Poppins'] text-3xl pt-10 bg-[#F6F2E4]"/>
                <input type='text' placeholder='E-mail' className="flex border-b-2 border-[#7D794F] font-['Poppins'] text-3xl pt-10 bg-[#F6F2E4]"/>
                <input type='Number' placeholder='Phone Number' className="flex border-b-2 border-[#7D794F] font-['Poppins'] text-3xl pt-10 bg-[#F6F2E4]"/>
            </div> 
        </div>
        <div className='flex flex-col flex-1 '>
            <div className='font-bold text-5xl tracking-widest'>
                Shipping Address
            </div>
            <div className='grid grid-cols-2 w-full h-full gap-10 pb-32 items-end text-[#7D794F]'>
                <input type='text' placeholder='Country / Region' className="flex border-b-2 border-[#7D794F] font-['Poppins'] text-3xl pt-10 bg-[#F6F2E4]"/>
                <input type='text'  placeholder='City' className="flex border-b-2 border-[#7D794F] font-['Poppins'] text-3xl pt-10 bg-[#F6F2E4]"/>
                <input type='text' placeholder='Postal Code' className="flex border-b-2 border-[#7D794F] font-['Poppins'] text-3xl pt-10 bg-[#F6F2E4]"/>
                <input type='Text' placeholder='Address, Apartement, Suite' className="flex border-b-2 border-[#7D794F] font-['Poppins'] text-3xl pt-10 bg-[#F6F2E4]"/>
            </div> 
        </div>
        </div>
    <div className='flex basis-1/3 justify-end item place-items-center'>
       <div className="flex flex-col bg-white h-3/4 items-center w-full ml-5 px-5 font-['Poppins']">
        <div className='flex justify-between items-center basis-2/12 w-full border-b-2 border-[#7D794F]'>
            <span className='tracking-widest text-[#7D794F] font-bold text-4xl'>Your Order </span>
            <Link to='/Checkout' className='tracking-widest text-lg text-[#6E7E2B]'> Edit Cart</Link>
        </div>
        <div className='flex flex-col divide-y-2 divide-[#7D794F] basis-6/12  w-full '>
            <div className='flex flex-1 items-center'>
                Items 1 
            </div>
            <div className='flex flex-1 items-center'>
                Items 2 
            </div>
        </div>
        <div className='flex flex-col basis-2/12  w-full  border-t-2 border-[#7D794F] gap-5 py-5 text-lg'>
            <div className='flex justify-between'>
                <span>Shipping</span>
                <span className='font-semibold'>Free</span>
            </div>
            <div className='flex justify-between'>
                <span>Subtotal</span>
                <span>33,90  €</span>
            </div>
        </div>
        <div className='flex justify-between basis-2/12 w-full  border-t-2 border-[#7D794F] items-center text-2xl'>
            <span className='font-bold'>Total</span>
            <span className='font-bold'>33,90  €</span>
        </div>
       </div>
    </div> 
    </div>
    {/* Right */}
    <div className="h-96  w-full font-['Poppins'] bg-[#F6F2E4]">
        <div className='text-[#7D794F] flex flex-col gap-10 py-10 text-3xl font-bold px-10 tracking-widest'>
            <div className='flex'>
                <input type='radio'/>
                <label className='pl-10'> Standard Shipping</label>
                <div className='flex justify-between gap-96 pl-28'>
                    <div className='text-[#AAA18A]'> 8 - 10 days</div>
                    <div className='text-black'>FREE</div>
                </div>
            </div>
           <div className='flex'>
                <input type='radio'/>
                <label className='pl-10'> Express Shipping  </label>
                <div className='flex justify-between gap-96 pl-40'>
                    <div className='text-[#AAA18A]'>  2 - 3 days</div>
                    <div className='text-black'>5,00  €</div>
                </div>
                
           </div>
        </div>
        <div className='flex mx-36 pt-5'>
            <Link to='/Payment' className='flex w-10/12 justify-center bg-[#7D794F] py-3 text-white text-3xl border-2 border-[#7D794F] hover:bg-transparent hover:text-[#7D794F]'>
                Payment
            </Link>
        </div>
        
    </div>
    </>

  )
}

export default ShippingDelivery
