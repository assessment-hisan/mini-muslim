import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoNotificationsCircle } from "react-icons/io5";
const Values = () => {

  const text = [
    {
      text: "messengers",
      clr: "#007eff",
      data: [
        "ADAM (AS)",
        "IDRIS (AS)",
        "NUH (AS)",
        "HUD (AS)",
        "SALEH (AS)",
        "IBRAHIM (AS)",
        "ISMAIL (AS)",
        "ISHAQ (AS)",
        "YA’QUB (AS)",
        "YUSUF (AS)",
        "SHU’AYB (AS)",
        "AYYUB (AS)",
        "DHULKIFL (AS)",
        "MUSA (AS)",
        "HARUN (AS)",
        "DAWUD (AS)",
        "SULAYMAN (AS)",
        "ILYAS (AS)",
        "ALYASA’ (AS)",
        "YUNUS (AS)",
        "ZAKARIYA (AS)",
        "YAHYA (AS)",
        "ISA (AS)",
        "MUHAMMED (AS)",
        "AL-KHIDR (AS)"
      ]
    },
    {
      text: "angels",
      clr: "#dec80d",
      data: [
        "Jibreel (AS)",
        "Mikael (AS)",
        "Israfeel (AS)",
        "Azrael (AS)",
        "Raqeeb (AS)",
        "Atheed (AS)",
        "Munkar (AS)",
        "Nakir (AS)",
        "Malik (AS)",
        "Rizwan (AS)"
      ]
    },
    {
      text: "ulul azm",
      clr: "#04c6dd",
      data: [
        "Nuh (AS)",
        "Ibrahim (AS)",
        "Musa (AS)",
        "Isa (AS)",
        "Muhammed (PBUH)"
      ]
    },
    {
      text: "khulfa u rashid",
      clr: "#b808ae",
      data: [
        "Abu Bakr Al-Siddiq (R.A.)",
        "Umar Ibn Al-Khattab (R.A.)",
        "Uthman Ibn Affan (R.A.)",
        "Ali Ibn Abi Talib (R.A.)"
      ]
    },
    {
      text: "islamic festivals",
      clr: "#f70b42",
      data: [
        "Eid Al-Fitr",
        "Eid Al-Adha",
        "Mawlid Al-Nabi",
        "Lailat Al-Miraj",
        "Lailat Al-Qadr",
        "Ashura",
        "The Day Of Arafah"
      ]
    },
    {
      text: " months",
      clr: "#0bf77a",
      data: [
        "Muharram",
        "Safar",
        "Rabi' al-awwal",
        "Rabi' al-thani",
        "Jumada al-awwal",
        "Jumada al-thani",
        "Rajab",
        "Sha'ban",
        "Ramadan",
        "Shawwal",
        "Dhul-Qa'dah",
        "Dhul-Hijjah"
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const openModal = (category) => {
    setSelectedCategory(category);
  };

  const closeModal = () => {
    setSelectedCategory(null);
  };
const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleNotifications = () => {
    setIsNotificationOpen((prev) => !prev);
  };
  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img
          src="/valuebg.jpg"
          alt="Background"
          className="object-cover w-full h-full opacity-80"
        />
      </div>
    {/* topnav */}
    <div className='fixed top-10 px-6 pr-10  py-2  flex justify-between items-center w-full'>
        <Link to="/">
        <div className='bg-black/10 ring-1 ml-5 ring-black/10 rounded-xl px-2 py-1 text-base font-mont flex justify-center items-center font-semibold'>
          <span><FaArrowLeftLong className='mr-2 text-lg'/></span> Back
        </div>
        </Link>
       <div className=''>
                       <IoNotificationsCircle onClick={toggleNotifications} className='text-[2.7rem] text-black'/>
                     </div>
                     {isNotificationOpen && (
                       <div className="absolute right-5 top-5 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                         <div className="p-4">
                           <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
                         </div>
                         <ul className="divide-y divide-gray-200">
                           <li className="p-3 text-gray-700 hover:bg-gray-100">You have a new message!</li>
                           <li className="p-3 text-gray-700 hover:bg-gray-100">Your event starts in 30 minutes.</li>
                           <li className="p-3 text-gray-700 hover:bg-gray-100">Reminder: Meeting at 3 PM.</li>
                         </ul>
                       </div>
                     )}
      </div>
      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center gap-y-5">
        {text.map(({ text, clr, data }) => (
          <p
            key={text}
            className="font-lucky text-3xl py-4 w-[20rem] text-center text-white rounded-xl tracking-wide cursor-pointer"
            style={{ backgroundColor: clr }}
            onClick={() => openModal({ text, clr, data })}
          >
            {text}
          </p>
        ))}
      </div>

      {/* Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="fixed z-10 bottom-0 left-0 w-full flex justify-center">
        <img
          src="valuebg.jpg"
          alt="Foreground"
          className="object-cover"
        />
      </div>
          <div className="z-20 relative  rounded-lg w-[90%] bg-black/20 max-w-md max-h-[70vh] my-8 overflow-y-auto p-5">
            
            <button
              className="absolute top-3 right-3 text-black text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2
              className="text-5xl font-lucky tracking-wide font-semibold mb-4 text-center uppercase "
              style={{ color: selectedCategory.clr }}
            >
              {selectedCategory.text}
            </h2>
            {selectedCategory.data && selectedCategory.data.length > 0 ? (
              <ul className="list-none pl-5 text-white text-lg">
                {selectedCategory.data.map((item, index) => (
                  <li key={index} className={`font-mont text-xl py-1 font-semibold text-center ${index %2 ? ``: `bg-white/20`}`}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-600">
                No additional information available.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Values;
