import React, { useState } from 'react';

const stories = [
  {
    id: 1,
    image: '/routine/1.1.png',
    heading: 'Story 1',
    content: 'This is the story of adventure and discovery. A tale that will captivate your imagination.',
  },
  {
    id: 2,
    image: '/routine/1.2.png', // Update to different images for variety
    heading: 'Story 2',
    content: 'An inspiring journey of courage and resilience. Dive into the narrative of overcoming odds.',
  },
  {
    id: 3,
    image: '/routine/1.3.png',
    heading: 'Story 3',
    content: 'A whimsical story of magic and wonder. Let yourself be enchanted by this captivating tale.',
  },
  {
    id: 4,
    image: '/routine/1.4.png',
    heading: 'Story 4',
    content: 'Explore the depths of friendship and loyalty through this touching narrative.',
  },
  {
    id: 5,
    image: '/routine/1.5.png',
    heading: 'Story 5',
    content: 'A thrilling story filled with suspense and unexpected twists. Get ready for an adventure!',
  },
];

const Story = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const openModal = (story) => {
    setSelectedStory(story);
  };

  const closeModal = () => {
    setSelectedStory(null);
  };

  return (
    <div className='view bg-slate-300 h-full py-10'>
      <h1 className="text-center py-10 text-3xl font-semibold">Story Mode</h1>

      <div className="grid grid-cols-1  gap-6 px-10 my-10 overflow-y-auto">
        {stories.map((story) => (
          <div 
            key={story.id}
            className="relative cursor-pointer rounded-lg shadow-md hover:shadow-xl transition-all max-w-[25rem] max-h-[20rem]"
            onClick={() => openModal(story)}
          >
            <img
              src={story.image}
              alt={story.heading}
              className="rounded-lg object-cover w-full h-40 "
            />
            {/* Text Overlay */}
            <h2 className="absolute z-10 bottom-0 left-0 right-0 text-xl font-semibold text-white bg-black bg-opacity-10 p-2 text-center rounded-b-lg">
              {story.heading}
            </h2>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-white rounded-lg max-w-lg w-full overflow-hidden shadow-lg">
            {/* Modal Header with Close Button */}
            <button
              className="absolute top-3 right-3 text-black text-xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Image as Fixed Background */}
            <div
              className="h-60 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${selectedStory.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h2 className="text-3xl text-white font-bold">{selectedStory.heading}</h2>
              </div>
            </div>

            {/* Story Content */}
            <div className="p-6 text-lg text-gray-700">
              <p>{selectedStory.content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Story;
