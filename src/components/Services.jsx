import React from 'react'
import { FaCarSide } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';
import { FaHeadphonesAlt } from 'react-icons/fa';
const Services = () => {
    const serviceDate = [
        {
            id:1,
            icon: <FaCarSide className='text-4xl md:text-5xl text-primary'/>,
            title:"free shopping",
            description:"free shopping on all order"
        },
        {
            id:2,
            icon: <FaCheckCircle className='text-4xl md:text-5xl text-primary'/>,
            title:"save money",
            description:"30 days money back"
        },
        {
            id:3,
            icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primary'/>,
            title:"online support ",
            description:"technical support "
        },
        {
            id:4,
            icon: <FaWallet className='text-4xl md:text-5xl text-primary'/>,
            title:"secure payment",
            description:"all payment secure"
        },
    ];
  return (
    <div className='container my-14 md:my-20'>
        <div className='grid grid-cols-2 lg:grid-cols-4
        gap-4 gap-y-8 p-4'>
        {
            serviceDate.map((ele)=>(
                <div
                data-aos="zoom-out"
                 className='flex gap-4 items-center'>
                    <div className="icon">{ele.icon}</div>
                    <div className="text">
                        <h2 className='text-2xl font-semibold'>{ele.title}</h2>
                        <p className='dark:text-gray-400 text-xl' >{ele.description}</p>
                    </div>
                </div>
          ))
        }
        </div>
    </div>
  )
}

export default Services