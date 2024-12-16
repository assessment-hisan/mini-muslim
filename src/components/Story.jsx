import React, { useState } from 'react';

const stories = [
  {
    id: 1,
    image: '/story1.jpg',
    heading: 'Story 1',
    content: 'This is the story of adventure and discovery. A tale that will captivate your imagination.',
  },
  {
    id: 2,
    image: '/story2.jpg',
    heading: 'Story 2',
    content: 'An inspiring journey of courage and resilience. Dive into the narrative of overcoming odds.',
  },
  {
    id: 3,
    image: '/story3.jpg',
    heading: 'Story 3',
    content: 'A whimsical story of magic and wonder. Let yourself be enchanted by this captivating tale.',
  },
  {
    id: 4,
    image: '/story4.jpg',
    heading: 'Story 4',
    content: 'Explore the depths of friendship and loyalty through this touching narrative.',
  },
  {
    id: 5,
    image: '/story5.jpg',
    heading: 'Story 5',
    content: 'A thrilling story filled with suspense and unexpected twists. Get ready for an adventure!',
  },
  {
    id: 8,
    image: '/routine/1.1.png',
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
    <div className='view bg-slate-300 min-h-screen py-10'>
      <h1 className="text-center py-10 text-3xl font-semibold">Story Mode</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10">
        {stories.map((story) => (
          <div
            key={story.id}
            className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all"
            onClick={() => openModal(story)}
          >
            <img
              src={story.image}
              alt={story.heading}
              className="rounded-t-lg object-cover w-full h-40"
            />
            <h2 className="text-xl font-semibold text-center py-4">{story.heading}</h2>
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
