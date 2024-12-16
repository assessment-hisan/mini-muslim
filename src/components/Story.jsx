import React, { useState } from 'react';

const stories = [
  {
    id: 1,
    image: '/story/figve.jpg',
    heading: 'forgiveness',
    content: 'This is the story of adventure and discovery. A tale that will captivate your imagination.',
  },
  {
    id: 2,
    image: '/story/honest.jpg', // Update to different images for variety
    heading: 'honest',
    content: 'An inspiring journey of courage and resilience. Dive into the narrative of overcoming odds.',
  },
  {
    id: 3,
    image: '/story/pun.jpg',
    heading: 'punchuality',
    content: 'A whimsical story of magic and wonder. Let yourself be enchanted by this captivating tale.',
  },
  {
    id: 4,
    image: '/story/smile.jpg',
    heading: 'Smile',
    content: 'Explore the depths of friendship and loyalty through this touching narrative.',
  },
  {
    id: 5,
    image: '/story/respect.jpg',
    heading: 'respect',
    content: 'Explore the depths of friendship and loyalty through this touching narrative.',
  },
];

const Story = () => {
  const [selectedStory, setSelectedStory] = useState(null);

 

  return (
    <div className='view bg-slate-300 h-full py-5 overflow-auto'>
      <h1 className="text-center py-2 text-3xl font-semibold mb-10">Story Mode</h1>

      <div className="grid grid-cols-1  gap-6 px-10 overflow-y-auto">
        {stories.map((story) => (
          <div 
            key={story.id}
            className="relative cursor-pointer rounded-lg shadow-md hover:shadow-xl transition-all max-w-[25rem] max-h-[20rem]"
            onClick={() => openModal(story)}
          >
            <img
              src={story.image}
              alt={story.heading}
              className="rounded-lg object-cover w-full h-72 "
            />
            {/* Text Overlay */}
            <h2 className="absolute z-10 bottom-0 left-0 right-0 text-2xl font-bold text-white bg-black bg-opacity-50 p-2 text-center rounded-b-lg uppercase ">
              {story.heading}
            </h2>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default Story;
