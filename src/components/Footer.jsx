import React from 'react'
import { FaFacebook, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa'
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className='container mt-3 pb-3'>
        <div className="grid grid-cols-2 lg:grid-cols-3">
        <div>
            <h1 className='font-semibold'>Navigation</h1>
            <hr className='w-[200px] mt-4 mb-2' />
            <div><a className='text-gray-600 font-semibold 
            hover:dark:text-white' href="#Home">Home</a></div>
            <div><a className='text-gray-600 font-semibold 
            hover:dark:text-white' href="#shop">shop</a></div>
            <div><a className='text-gray-600 font-semibold 
            hover:dark:text-white' href="#about">about</a></div>
            <div><a className='text-gray-600 font-semibold 
            hover:dark:text-white' href="#blogs">blogs</a></div>
        </div>
        <div>
        <h1 className='font-semibold'>Social</h1>
        <hr className='w-[200px] mt-4 mb-2' />
        <a className='block p-2 text-gray-600' href="#"><FaFacebook/></a>
        <a className='block p-2 text-gray-600' href="#"><FaTwitter/></a>
        <a className='block p-2 text-gray-600' href="#"><FaLinkedin/></a>
        </div>
        <div>
        <h1 className='font-semibold'>contact</h1>
        <hr className='w-[200px] mt-4 mb-2' />
        <div className='flex gap-3 items-center text-gray-600 '>
            <a href="#"><FaPhone/></a>
            <p className=' hover:dark:text-white'>+1733739748</p>
        </div>
        <div className='flex gap-3 items-center text-gray-600 ' >
            <a href="#"><SiGmail /></a>
            <p  className=' hover:dark:text-white'>shoppingPlace@gmail.com</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer