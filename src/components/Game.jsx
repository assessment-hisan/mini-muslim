import React from 'react'
import { Link } from 'react-router-dom'




const Game = () => {
  return (
 <>
<div className="relative z-20 h-screen max-w-md mx-auto flex flex-col items-center  text-5xl font-bold px-2 bg-transparent">
<div className='mt-10 flex-center pb-5 h-52 w-full rounded-xl bg-gradient-to-br from-zinc-600/20 to-black/20'>
        <h1 className='text-8xl font-bold text-transparent bg-gradient-to-br from-zinc-900 from-10% to-black bg-clip-text'>Games</h1>
    </div>
    <div className="w-full mt-5 flex-center flex-wrap gap-8 pb-32">
        <Link to="/games/routine" aria-label="Daily routine game" >
            <div className="relative w-72 h-60  rounded-2xl mx-5 drop-shadow-xl hover:bg-yellow-200 transition duration-300">
                
                <img src="/game/daily.png" alt="" className='absolute object-cover'/>
            </div>
        </Link>
        <Link to="/games/adhkar" aria-label="Adhkar routine game">
            <div className="relative w-72 h-60  rounded-2xl mx-3 drop-shadow-xl  hover:bg-sky-500 transition duration-300">
                
                <img src="/game/dikr.png" alt="" className='absolute object-center'/>
            </div>
        </Link>
    </div>
    <div className='absolute  -z-10  mx-auto'>
 <img src="/sky.jpg" alt=""  className='object-cover h-[100vh] opacity-50 '/>
</div>
</div>
 
</>
  )
}

export default Game


