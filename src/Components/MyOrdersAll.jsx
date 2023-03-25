import React from 'react'

const MyOrdersAll = () => {
  return (
    <>
    <div className='flex flex-col w-full'>
    <div className='flex basis-1/4 bg-purple-300 w-full'>
        <div className='grid grid-cols-4 justify-between h-24 bg-red-300 w-full'>
        <div>
            Order
        </div>
        <div>
            Order Date
        </div>
        <div>
            Order Cost
        </div>
        <div>
            Order Status
        </div>
        </div>
    </div>
    <div className='flex basis-3/4 bg-green-300'>
        items
    </div>
    </div>
    </>

  )
}

export default MyOrdersAll
