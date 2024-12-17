import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoNotificationsCircle } from 'react-icons/io5';

const data = [
  { id: 1, title: "Allah", color: "#df047b", data: "FirstModal" },
  { id: 2, title: "Islam", color: "#04c6dd", data: ["Shahada", "Salat", "Zakat", "Sawm", "Hajj"] },
  { id: 3, title: "Belief", color: "#098b8d", data: [
    "To believe in the existence of Allah",
    "To believe in the existence of angels of Allah",
    "To believe in the existence of the holy books of Allah",
    "To believe in the existence of messengers of Allah",
    "To believe in the last day",
    "To believe that anything good or bad is from Allah"
  ] },
  { id: 4, title: "Holy Books", color: "#007eff", data: ["The qibla is the direction towards the Kaaba in the Sacred Mosque in Mecca, which is used by Muslims in various religious contexts, particularly the direction of prayer for the salah"] },
  { id: 5, title: "Qibla", color: "#468f04", description: "Description for item 5" },
  { id: 6, title: "Prayer", color: "#f70b42", description: "Description for item 6" },
  { id: 7, title: "Prophet", color: "#dec80b", description: "Description for item 7" },
];

// Modal Component
const Modal = ({ item, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded h-screen shadow-lg w-full">
      <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
      <p>{item.description}</p>
      <button
        className="absolute top-3 z-30 right-3 text-black text-6xl font-bold"
        onClick={onClose}
      >
        &times;
      </button>
    </div>
  </div>
);

const FirstModal = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded h-screen shadow-lg w-full">
      <button
        className="absolute top-3 z-30 right-3 text-black text-6xl font-bold"
        onClick={onClose}
      >
        &times;
      </button>
      <div className="text-center py-20">
        <h2 className="text-5xl font-mont font-bold mb-4">Allah</h2>
        <p className=''>Allah is our Creator, the One who made everything around us! He created the sun that shines brightly, the moon that lights up the night, the stars that sparkle, the trees that give us shade, and even the tiny ants and big animals. Allah is the One who made you, me, and all the people in the world.</p>
        <p>He is so powerful that He just says “Be!” and whatever He wants is created. Allah knows everything, even the secrets in our hearts, and He is always watching over us.</p>
        <p>Allah is very kind, loving, and merciful. He loves us more than anyone else, even more than our parents! He gives us food to eat, air to breathe, and families to take care of us. And when we make mistakes, Allah is ready to forgive us if we say sorry to Him.</p>
        <p>Even though we can’t see Allah, we can feel His presence in the beautiful world around us and in the peace He puts in our hearts. He is always close to us and listens when we pray. Allah is One, and there is no one like Him!</p>
        <p>Let’s always remember Allah, love Him, and be thankful for all the wonderful things He has given us!</p>
      </div>
    </div>
  </div>
);


const Priciples = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="view relative h-screen">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img src="/valuebg.jpg" alt="Background" className="object-cover w-full h-full opacity-80" />
      </div>
      {/* topnav */}
      <div className="relative top-10 px-6 pr-10 mb-10 py-2 flex justify-between items-center w-full">
        <Link to="/">
          <div className="bg-black/10 ring-1 ml-5 ring-black/10 rounded-xl px-2 py-1 text-base font-mont flex justify-center items-center font-semibold">
            <span><FaArrowLeftLong className="mr-2 text-lg" /></span> Back
          </div>
        </Link>
        <div className="">
          <IoNotificationsCircle className="text-[2.7rem] text-black" />
        </div>
      </div>

      {/* grid layout */}
      <div className="p-4 px-12 relative z-50">
        {/* Grid Layout */}
        <div className="space-y-5">
          {/* row */}
          <div className="grid grid-cols-1">
            {data.slice(0, 1).map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                style={{ background: item.color }}
                className="para p-4 bg-gray-200 text-center rounded cursor-pointer hover:bg-gray-300"
              >
                {item.title}
              </div>
            ))}
          </div>
          {/* First Row */}
          <div className="grid grid-cols-2 gap-4">
            {data.slice(1, 3).map((item) => (
              <div
                key={item.id}
                style={{ background: item.color }}
                onClick={() => setSelectedItem(item)}
                className="para p-4 flex justify-center items-center h-44 bg-gray-200 text-center rounded cursor-pointer hover:bg-gray-300"
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 gap-4">
            {data.slice(3, 4).map((item) => (
              <div
                key={item.id}
                style={{ background: item.color }}
                onClick={() => setSelectedItem(item)}
                className="para p-4 bg-gray-200 text-center rounded cursor-pointer hover:bg-gray-300"
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-2 gap-4">
            {data.slice(4, 6).map((item) => (
              <div
                key={item.id}
                style={{ background: item.color }}
                onClick={() => setSelectedItem(item)}
                className="para flex justify-center items-center h-44 p-4 bg-gray-200 text-center rounded cursor-pointer hover:bg-gray-300"
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Fourth Row */}
          <div className="grid grid-cols-1">
            {data.slice(6, 7).map((item) => (
              <div
                key={item.id}
                style={{ background: item.color }}
                onClick={() => setSelectedItem(item)}
                className="para p-4 bg-gray-200 text-center rounded cursor-pointer hover:bg-gray-300"
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedItem && (selectedItem.data === "FirstModal" ? <FirstModal onClose={() => setSelectedItem(null)} /> : <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />)}
      </div>
    </div>
  );
};

export default Priciples;
