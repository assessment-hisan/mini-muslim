import React from 'react';
import { Link , useNavigate } from 'react-router-dom';

const choiceDetails = [
    { id: 1, img: "/choice/game.png", bg: "#00ac81", text: "Game", link: "/games/routine" },
    { id: 2, img: "/choice/principles.png", bg: "#e8b400", text: "Principles", link: "/games/adhkar" },
    { id: 3, img: "/choice/story.png", bg: "#b3082c", text: "Stories", link: "/story" },
    { id: 4, img: "/choice/information.png", bg: "#0362c4", text: "Key Values", link: "" },
];

const Card = ({ containerStyle, img, text }) => (
    <div className="flex flex-col items-center">
        <div
            className="rounded-2xl px-4 py-4"
            style={{ backgroundColor: containerStyle }}
        >
            <img src={img} alt={text} className="w-28 h-28  object-cover" />
            <h1 className="text-xl font-semibold text-white text-center mt-2">
                {text}
            </h1>
        </div>
    </div>
);

const Home = ({ setActiveTab }) => {
  const navigate = useNavigate()
  const handleCardClick = (link) => {
      if (link.includes("games")) {
          setActiveTab("game"); // Set active tab to Game component
      } else {
        navigate(link);
      }
  };
    return (
        <div className='relative min-h-screen'>
            {/* Background Image */}
            <div className='fixed inset-0 z-0'>
                <img src="/BBGG.jpg" alt="Background" className='object-cover w-full h-full opacity-80' />
            </div>

            {/* Header Section */}
            <div className="relative z-30 py-5 pt-12 w-[95%] mx-auto px-2 flex justify-between items-center">
                <div>
                <h1 className='font-lucky text-[2rem]  text-black uppercase tracking-widest'>Mini Muslim</h1>
                <p className=" font-mont text-base text-gray-800 leading-5 pl-1 font-semibold ">Welcome to Mini Muslim</p>
                </div>
                <div className='h-14 w-14 bg-blue-700 rounded-lg'> 

                </div>
            </div>

            {/* Main Content Section */}
            <div className='absolute w-full z-30 overflow-auto'>
                <div className="relative w-[95%] mx-auto bg-[#092ca1] h-[200px] flex rounded-[2rem] shadow-lg ">
                    <div className="w-1/2 h-full flex flex-col  text-3xl font-semibold pl-3 text-white ">
                    <p className='text-6xl font-bold font-kids mb-7 leading-[4rem]' >,,</p>
                    <p className=" font-light text-2xl leading-5 font-mont">Childrens</p>
                        <p className="font-mont font-bold text-3xl">Enlightenment</p>
                    </div>
                    <div className="w-1/2 h-full flex items-center justify-center">
                        <img src="/kid.png" alt="Character" className='h-full object-cover mt-3 mr-2 ' style={{
    clipPath: 'polygon(0 0, 0 0, 0 100%, 100% calc(100% - 10px), calc(100% - 10px) 10%)'
}}
 />
                    </div>
                </div>

                {/* Choice Selection Section */}
                <div className='z-10 mt-6'>
                    <h1 className="text-gray-800 font-semibold text-3xl text-center mb-4">
                        Select Your Choice
                    </h1>
                    <div className="flex flex-wrap justify-center gap-4 p-4 mb-32">
                        {choiceDetails.map(({ id, img, bg, text, link }) => (
                            <div key={id} onClick={() => handleCardClick(link, <Card />)}>
                                <Card
                                    text={text}
                                    img={img}
                                    containerStyle={bg}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Rewards Section (Commented Out) */}
            {/* 
            <div className=''>
                <h1 className="pl-10 text-3xl font-semibold py-5 text-gray-500">Rewards</h1>
                <div className="overflow-auto flex flex-col justify-center items-center gap-5 mb-40">
                    <Reward/>
                    <Reward/>
                    <Reward/>
                    <Reward/>
                </div>
            </div> 
            */}
        </div>
    );
}

export default Home;
