import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoNotificationsCircle } from "react-icons/io5";
const Priciples = () => {
  return (
    <div  className='view relative h-screen'>
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img
          src="/valuebg.jpg"
          alt="Background"
          className="object-cover w-full h-full opacity-80"
        />
      </div>
        {/* topnav */}
    <div className='fixed top-10 px-6 pr-10  py-2  flex justify-between items-center w-full'>
        <Link to="/">
        <div className='bg-black/10 ring-1 ml-5 ring-black/10 rounded-xl px-2 py-1 text-base font-mont flex justify-center items-center font-semibold'>
          <span><FaArrowLeftLong className='mr-2 text-lg'/></span> Back
        </div>
        </Link>
        <div className=''>
          <IoNotificationsCircle className='text-[2.7rem] text-black'/>
        </div>
      </div>
    </div>
  )
}

export default Priciples