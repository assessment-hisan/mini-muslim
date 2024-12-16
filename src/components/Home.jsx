import React from 'react'
import sun from "../assets/clock.svg"
import { Link } from 'react-router-dom';

const choiceDetails = [
    { id: 1, img: "/choice/game.png", bg: "#3C6B9F", text: "Game", link : "/games/routine" },
    { id: 3, img: "/choice/story.png", bg: "#9B6377", text: "Stories",link : "/story" },
    { id: 2, img: "/choice/principles.png", bg: "#9B6377", text: "Principles", link : "/games/adhkar" },
    { id: 4, img: "/choice/information.png", bg: "#3C6B9F", text: "key values",link : "" },
    
  ];
  
const Reward = ()=>{
return (
  <div className="flex justify-between items-center gap-10 text-white rounded-xl bg-[#E67817] max-w-[25rem]  py-2 px-3">
    <img src={sun} alt="" />
    <h1 className="font-semibold text-xl">spend 30</h1>
    <div className="bg-white text-[#E67817] px-3 rounded-xl">
        <h1>claim </h1>
    </div>
  </div>
)
}

  
  const Card = ({ containerStyle, img, text, textStyle, }) => (
    <div className="flex flex-col items-center" >
      <div
        className="rounded-2xl p-4"
        style={{ backgroundColor: containerStyle }}
      >
        <img src={img} alt={text} className="w-28 h-28 object-cover" />
      </div>
      <h1 className="text-lg font-semibold" style={{ color: textStyle }}>
        {text}
      </h1>
    </div>
  );
  
  const Home = ()=>{
    return (
      <div>
        {/* score section  */}
        <div className="h-44"></div>
  
  
      <div className="w-full bg-primary/80 h-[250px] flex-center">
        <div className="w-1/2 h-full flex-center text-3xl font-semibold pl-10 text-white">
          <p className="font-inter font-bold">Explore Mini Muslim</p>
        </div>
        <div className="w-1/2 h-full">
          <img src="/chr-boy.png" alt="Character" />
        </div>
      </div>
  
      <div>
        
        <h1 className="text-gray-500 font-semibold text-2xl text-center my-4">
          Select your choice
        </h1>
        <div className="flex-center flex-wrap gap-4 p-4">
          {choiceDetails.map(({ id, img, bg, text, link }) => (
           <Link to={link}>
           <Card
           key={id}
           text={text}
           link={link}
           img={img}
           containerStyle={bg}
           textStyle={bg}
         />
         </Link> 
          ))}
        </div>
      </div>
       {/* rewards */}
       <div className=''>
        <h1 className="pl-10 text-3xl font-semibold py-5 text-gray-500">Rewards</h1>
       <div className="overflow-auto flex flex-col justify-center items-center gap-5 mb-40">
        
        <Reward/>
        <Reward/>
        <Reward/>
        <Reward/>
  
      </div>
       </div>
    </div>
    )
  }
  

export default Home