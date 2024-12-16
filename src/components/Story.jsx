import React, { useState } from 'react';

const stories = [
  {
    id: 1,
    image: '/story/figve.jpg',
    bg: "/story/bg/fg.png",
    head : "/story/head/fo.png",
    heading: 'Forgiveness',
    content: 'Artificial intelligence (AI) has rapidly evolved from a concept in science fiction to a transformative force reshaping industries across the globe. <br/> As AI technologies continue to advance, their influence on the modern workplace is becoming increasingly profound. This essay will delve into the multifaceted impact of AI on various aspects of work, including automation, job displacement, skill enhancement, and ethical considerations.  One of the most significant impacts of AI is the automation of routine and repetitive tasks. AI-powered systems can efficiently process large volumes of data, generate reports, and perform other mundane activities that were previously done by humans. This automation frees up human workers to focus on more complex and creative tasks that require critical thinking, problem-solving, and strategic decision-making  Artificial intelligence (AI) has rapidly evolved from a concept in science fiction to a transformative force reshaping industries across the globe. <br/> As AI technologies continue to advance, their influence on the modern workplace is becoming increasingly profound. This essay will delve into the multifaceted impact of AI on various aspects of work, including automation, job displacement, skill enhancement, and ethical considerations.  One of the most significant impacts of AI is the automation of routine and repetitive tasks. AI-powered systems can efficiently process large volumes of data, generate reports, and perform other mundane activities that were previously done by humans. This automation frees up human workers to focus on more complex and creative tasks that require critical thinking, problem-solving, and strategic decision-making'
  },
  {
    id: 2,
    image: '/story/honest.jpg',
    bg: "/story/bg/pun.jpg",
    head : "/story/head/ho.png",
    heading: 'Honesty',
    content: 'An inspiring journey of courage and resilience. Dive into the narrative of overcoming odds.',
  },
  {
    id: 3,
    image: '/story/pun.jpg',
    bg: "/story/bg/pun.jpg",
    head : "/story/head/pun.png",
    heading: 'Punctuality',
    content: 'A whimsical story of magic and wonder. Let yourself be enchanted by this captivating tale.',
  },
  {
    id: 4,
    image: '/story/smile.jpg',
    bg: "/story/bg/sm.jpg",
    head : "/story/head/sm.png",
    heading: 'Smile',
    content: 'Explore the depths of friendship and loyalty through this touching narrative.',
  },
  {
    id: 5,
    image: '/story/respect.jpg',
    head : "/story/head/re.png",
    bg: "/story/bg/re.jpg",
    heading: 'Respect',
    content: 'Explore the depths of friendship and loyalty through this touching narrative.',
  },
];

const Story = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const openModal = (story) => {
    setSelectedStory(story);
  };

  const closeModal = () => {
    console.log("Closing modal"); // Debugging log
    setSelectedStory(null);
  };
 console.log(selectedStory)
  return (
    <div className='view  h-full py-5 overflow-auto '>
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/sky.jpg"
          alt="Background"
          className="w-full h-[100vh] object-cover opacity-50"
        />
      </div>
      <h1 className="text-center py-2 text-3xl font-semibold mb-10">Story Mode</h1>

      <div className="grid grid-cols-1 gap-6 px-10 overflow-y-auto">
        {stories.map((story) => (
          <div 
            key={story.id}
            className="relative cursor-pointer rounded-lg shadow-md hover:shadow-xl transition-all max-w-[25rem] max-h-[20rem]"
            onClick={() => openModal(story)}
          >
            <img
              src={story.image}
              alt={story.heading}
              className="rounded-lg object-cover w-full h-72"
            />
            {/* Text Overlay */}
            <h2 className="absolute z-10 bottom-0 left-0 right-0 text-2xl font-bold text-white bg-black bg-opacity-50 p-2 text-center rounded-b-lg uppercase">
              {story.heading}
            </h2>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedStory && (
  <div className="fixed inset-0 z-50 flex  items-center justify-center bg-black bg-opacity-70">
    <div className="relative bg-white rounded-lg w-full h-screen overflow-hidden"> {/* 9/12 width and 2/3 height */}
      {/* Close Button */}
      <button
        className="absolute top-3 z-30 right-3 text-black text-6xl font-bold"
        onClick={closeModal}
      >
        &times;
      </button>

      {/* Background Image */}
      <div
        className="h-full bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${selectedStory.bg})` }}
      >
        <img src={selectedStory.head} alt="" className='h-32 sm:h-44 mx-auto pt-10 '/>
        {/* Story Content */}
        <div className="absolute inset-x-0 bottom-[20%]  p-6 text-lg text-gray-700 h-[55%] overflow-y-auto bg-gray-800/10 m-5 rounded-2xl"> {/* Adjusted height for scrollable content */}
          <p className='font-medium text-base sm:text-xl text-black text-justify'>{selectedStory.content}</p>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Story;
