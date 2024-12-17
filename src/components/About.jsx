import React from 'react'

const About = () => {
  return (
    <div className='relative'>
        {/* Background */}
      <div className="fixed inset-0 z-0">
        <img
          src="/about.jpg"
          alt="Background"
          className="object-cover w-full h-full opacity-80"
        />          
      </div>
       
      <div className='mx-auto my-auto mt-32 relative w-[85%] h-[50vh] rounded-3xl  z-30 font-mont p-10 '>
      <h1 className='font-lucky text-[2rem]  text-black uppercase leading-8 tracking-wide'>Mini Muslim</h1>
        <h1 className='text-blue-50 font-extrabold text-5xl text-center bg-[#092ca1] p-2 rounded-t-lg '>About</h1>
            <p className='bg-blue-100/70 p-2 rounded-b-xl font-semibold text-center'>MiniMuslim is a thoughtfully designed app created to help students build strong morals and healthy daily routines, all while staying connected to Islamic values. In today’s world full of distractions, MiniMuslim acts as a guiding companion, encouraging young minds to cultivate good habits, time management, and self-discipline in a fun and engaging way.</p>
           
      </div>
    </div>
  )
}

export default About