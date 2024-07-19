import React from 'react'
import smartwatch2 from "../images/smartwatch2.png"
const Banner = () => {
  return (
    <div className='container my-14 md:my-20'>
        <div className='flex justify-between items-center rounded-md p-3 h-[280px]
        bg-gradient-to-br from-brandGreen to-brandGreen/90 relative' >
            <div className="left-text">
                <h1 className='font-bold text-4xl text-white'>HAPPY</h1>
                <h1 className='font-bold text-4xl text-white'>HOURS</h1>
            </div>
            <div className="image">
                <img src={smartwatch2} alt="watch"className='absolute
                l-1/2 -translate-x-1/2 w-[320px] top-[-17px] ' />
            </div>
            <div className="right-text">
                <h1 className='font-bold text-4xl text-white' >Winter sale</h1>
            </div>
        </div>
    </div>
  )
}

export default Banner