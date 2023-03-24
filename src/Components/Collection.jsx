import React from 'react'
import Line from '../Assets/Line2.png'
import Shampoo from '../Assets/Shampoo.png'
import ShowerGel from '../Assets/ShowerGel.png'
import BodyLotion from '../Assets/BodyLotion.png'
import HairCon from '../Assets/HairConditioner.png'
import Soap from '../Assets/Soap.png'
import BodyLot from '../Assets/BodyLot.png'
import HBW from '../Assets/HBW.png'
import Candle from '../Assets/candle.svg'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'

const Collection = () => {
  return (
    <>
    <div id="Collection" className="flex flex-col  font-['Poppins'] text-[#7D794F]">
        <div className=' flex font-bold text-2xl justify-center py-3'>
            Oliva del Mediterraneo
        </div>
        <div className=' flex gap-5 py-3'>
        <div className='flex items-center'>
            <img src={Line}/>
        </div>
        <div className='font-semibold text-xl'>
            Our Collection      
        </div>
        </div>
        <div className='bg-purple-200 flex h-96 overflow-x-scroll'>
            <div className='w-96 bg-red-200'>

            </div>
            <div className='w-96 bg-yellow-200'>

            </div>
            <div className='w-96 bg-blue-300'>

            </div>
            <div className='w-96 bg-purple-300'>

            </div>
            <div className='w-96 bg-green-300'>

            </div>
            <div className='w-96 bg-blue-300'>

            </div>
        </div>
        <Link to='/product' className=' underline flex gap-3 font-semibold justify-end text-lg py-4'>
            Shop all
            <div className='flex items-center'>
                <Icon icon="material-symbols:arrow-back-ios-new-rounded" color="#7d794f" />
                <Icon icon="material-symbols:arrow-back-ios-new-rounded" color="#7d794f" hFlip={true}/>
            </div>
        </Link>
    </div>
    </>
  )
}

export default Collection
