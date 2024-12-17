import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoNotificationsCircle } from 'react-icons/io5';

const data = [
  { id: 1, title: "Allah", color: "#df047b", data: "FirstModal" },
  { id: 2, title: "Islam", color: "#04c6dd", data: "SecondModal" },
  { id: 3, title: "Belief", color: "#098b8d", data: "ThirdModal"},
  { id: 4, title: "Holy Books", color: "#007eff", data: "FourthModal" },
  { id: 5, title: "Qibla", color: "#468f04", data: "FifthModal" },
  { id: 6, title: "Prayer", color: "#f70b42", data: "SixthModal" },
  { id: 7, title: "Prophet", color: "#dec80b", data: "SeventhModal" },
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
    <div className="bg-blue-100 p-6 rounded h-screen shadow-lg w-full">
      <button
        className="absolute top-3 z-30 right-3 text-black text-6xl font-bold"
        onClick={onClose}
      >
        &times;
      </button>
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img
          src="/valuebg.jpg"
          alt="Background"
          className="object-cover w-full h-full opacity-80"
        />
      </div>
      <div className="relative z-10 text-center h-[70vh] mt-20 p-2 bg-blue-100/50 rounded-2xl">
        <h2 className="text-5xl font-mont font-bold mb-4 text-blue-800">Allah</h2>
        <div className='text-xl font-mont text-center h-[90%] overflow-auto font-normal text-blue-800'>
            <p>Allah is our Creator, the One who made everything around us! He created the sun that shines brightly, the moon that lights up the night, the stars that sparkle, the trees that give us shade, and even the tiny ants and big animals. Allah is the One who made you, me, and all the people in the world.</p>
            <p>He is so powerful that He just says “Be!” and whatever He wants is created. Allah knows everything, even the secrets in our hearts, and He is always watching over us.</p>
            <p>Allah is very kind, loving, and merciful. He loves us more than anyone else, even more than our parents! He gives us food to eat, air to breathe, and families to take care of us. And when we make mistakes, Allah is ready to forgive us if we say sorry to Him.</p>
            <p>Even though we can’t see Allah, we can feel His presence in the beautiful world around us and in the peace He puts in our hearts. He is always close to us and listens when we pray. Allah is One, and there is no one like Him!</p>
            <p>Let’s always remember Allah, love Him, and be thankful for all the wonderful things He has given us!</p>
         </div>
      </div>
    </div>
  </div>
);


const SecondModal = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-blue-100 p-6 rounded h-screen shadow-lg w-full">
      <button
        className="absolute top-3 z-30 right-3 text-black text-6xl font-bold"
        onClick={onClose}
      >
        &times;
      </button>
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img
          src="/valuebg.jpg"
          alt="Background"
          className="object-cover w-full h-full opacity-80"
        />          
      </div>
      <div className='relative z-10 h-full w-full font-mont flex justify-center items-center'>
        <div className='space-y-5 bg-blue-100/20 p-8 rounded-2xl text-center'>
          <h1 className='text-5xl  font-lucky font-semibold text-blue-800'>Islam</h1>
          <div className="text-2xl font-medium text-blue-800">
            <p>Shahada (Faith)</p>
            <p>Salat (Prayer)</p>
            <p>Zakat (Charity)</p>
            <p>Sawm (Fasting)</p>
            <p>Hajj (Pilgrimage)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ThirdModal = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-blue-100 p-6 rounded h-screen shadow-lg w-full">
      <button
        className="absolute top-3 z-30 right-3 text-black text-6xl font-bold"
        onClick={onClose}
      >
        &times;
      </button>
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img
          src="/valuebg.jpg"
          alt="Background"
          className="object-cover w-full h-full opacity-80"
        />
      </div>
      <div className='relative z-20'>
        <div className='mt-32 space-y-3 bg-blue-100/20 p-5 rounded-lg'>
          <h1 className='text-5xl font-lucky font-semibold text-center text-blue-800'>Belief</h1>
          <ul className='text-xl font-medium text-blue-800 list-none px-8'>
            <li>To believe in the existence of Allah</li>
            <li>To believe in the existence of angels of Allah</li>
            <li>To believe in the existence of the holy books of Allah</li>
            <li>To believe in the existence of messengers of Allah</li>
            <li>To believe in the last day</li>
            <li>To believe that anything good or bad is from Allah</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const FourthModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded h-screen shadow-lg w-full">
        <button
          className="absolute top-3 right-3 text-black text-6xl font-bold z-20"
          onClick={onClose}
        >
          &times;
        </button>
        
        {/* Background */}
        <div className="fixed inset-0 z-0">
          <img
            src="/valuebg.jpg"
            alt="Background"
            className="object-cover w-full h-full opacity-80"
          />
        </div>

        <div className="relative z-20">
          <div className="mt-32 space-y-5 bg-blue-100/50 p-5 rounded-lg">
            <h1 className="text-5xl font-lucky font-semibold text-center text-blue-800">Holy Books</h1>
            <ul className="text-xl font-medium text-blue-800 list-disc px-8">
              <li>Tourat - Musa</li>
              <li>Zabur - Davud</li>
              <li>Injeel -Esa</li>
              <li>Quran - Muhammad</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const FifthModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded h-screen shadow-lg w-full">
        <button
          className="absolute top-3 right-3 text-black text-6xl z-30 font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        
        {/* Background */}
        <div className="fixed inset-0 z-0">
          <img
            src="/valuebg.jpg"
            alt="Background"
            className="object-cover w-full h-full opacity-80"
          />
        </div>

        <div className="relative z-20">
          <div className="mt-32 space-y-5 bg-blue-100/50 p-6 rounded-lg">
            <h1 className="text-5xl font-lucky font-semibold text-center text-blue-800">Qibla</h1>
            <p className="text-xl text-center text-blue-800">
              The Qibla (Arabic: قِبْلَة, lit. ‘direction’) is the direction towards the Kaaba in the Sacred Mosque in Mecca, which is used by Muslims in various religious contexts, particularly the direction of prayer for the salah.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SixthModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded h-screen shadow-lg w-full">
        <button
          className="absolute top-3 right-3 z-30 text-black text-6xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        
        {/* Background */}
        <div className="fixed inset-0 z-0">
          <img
            src="/valuebg.jpg"
            alt="Background"
            className="object-cover w-full h-full opacity-80"
          />
        </div>

        <div className="relative z-20">
          <div className="mt-32 space-y-5 bg-blue-100/50 p-6 rounded-lg">
            <h1 className="text-4xl font-bold  font-lucky text-center  text-blue-800">Prayer Times</h1>
            <ul className="text-lg text-center font-medium text-blue-800 list-disc px-8">
              <li>Fajr: Performed at dawn, when the morning light appears across the sky</li>
              <li>Dhuhr: Performed just after the sun reaches its zenith, in the early afternoon</li>
              <li>Asr: Performed between noon and sunset, in the late afternoon</li>
              <li>Maghrib: Performed just after sunset, at sunset</li>
              <li>Isha: Performed during the night</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


const SeventhModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded h-screen shadow-lg w-full">
        <button
          className="absolute top-3 right-3 z-30 text-black text-6xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        
        {/* Background */}
        <div className="fixed inset-0 z-0">
          <img
            src="/valuebg.jpg"
            alt="Background"
            className="object-cover w-full h-full opacity-80"
          />
        </div>

        <div className="relative z-20 ">
          <div className="mt-28 h-[80vh] overflow-y-auto space-y-5 bg-blue-100/70 p-6 rounded-lg ">
            <h1 className="text-4xl font-bold text-center font-lucky text-blue-700">Prophet Muhammad (PBUH)</h1>
            <div className="text-lg text-center font-medium text-blue-900">
              <p><strong>Full Name:</strong> Muhammad ibn Abdullah</p>
              <p><strong>Date of Birth:</strong> 12th of Rabi' al-Awwal, (approximately 570 CE)</p>
              <p><strong>Place of Birth:</strong> Mecca</p>
              <p><strong>Tribe:</strong> Banu Hashim</p>
              <p><strong>Father:</strong> Abdullah ibn Abdul Muttalib</p>
              <p><strong>Mother:</strong> Amina bint Wahb</p>
              <p><strong>Grandfather:</strong> Abdul Muttalib</p>
              <h2 className="text-3xl font-bold font-lucky text-center text-blue-700 mt-4">Wives (RA)</h2>
              <ul className="text-lg text-center list-none px-10 space-y-2">
                <li>Khadijah bint Khuwaylid (RA)</li>
                <li>Sawda bint Zam'a (RA)</li>
                <li>Aisha bint Abi Bakr (RA)</li>
                <li>Hafsa bint Umar (RA)</li>
                <li>Zaynab bint Khuzayma (RA)</li>
                <li>Umm Salama (Hind bint Abi Umayya) (RA)</li>
                <li>Zaynab bint Jahsh (RA)</li>
                <li>Juwayriya bint al-Harith (RA)</li>
                <li>Umm Habiba (Ramlah bint Abi Sufyan) (RA)</li>
                <li>Safiyya bint Huyayy (RA)</li>
                <li>Maymunah bint al-Harith (RA)</li>
              </ul>
              <h2 className="text-3xl font-bold text-center font-lucky text-blue-700 mt-4">Children</h2>
              <ul className="text-lg text-center list-disc px-8 space-y-2">
                <li><strong>Qasim ibn Muhammad</strong></li>
                <li><strong>Abdullah ibn Muhammad</strong> (also known as Tayyib and Tayyir)</li>
                <li><strong>Zainab bint Muhammad</strong></li>
                <li><strong>Ruqayyah bint Muhammad</strong></li>
                <li><strong>Umm Kulthum bint Muhammad</strong></li>
                <li><strong>Fatimah bint Muhammad</strong></li>
                <li><strong>Abd al-Rahman ibn Muhammad</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


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
        <div className="space-y-3">
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
        {selectedItem && (
        <>
          {selectedItem.data === "FirstModal" && (
            <FirstModal onClose={() => setSelectedItem(null)} />
          )}
          {selectedItem.data === "SecondModal" && (
            <SecondModal onClose={() => setSelectedItem(null)} />
          )}
          {selectedItem.data === "ThirdModal" && (
            <ThirdModal onClose={() => setSelectedItem(null)} />
          )}
          {selectedItem.data === "FourthModal" && (
            <FourthModal onClose={() => setSelectedItem(null)} />
          )}
          {selectedItem.data === "FifthModal" && (
            <FifthModal onClose={() => setSelectedItem(null)} />
          )}
          {selectedItem.data === "SixthModal" && (
            <SixthModal onClose={() => setSelectedItem(null)} />
          )}
          {selectedItem.data === "SeventhModal" && (
            <SeventhModal onClose={() => setSelectedItem(null)} />
          )}
        </>
      )}
      </div>
    </div>
  );
};

export default Priciples;
