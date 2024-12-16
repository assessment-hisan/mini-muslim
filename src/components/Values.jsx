import React, { useState } from 'react';

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
      text: "days & months",
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

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img
          src="/valuebg.jpg"
          alt="Background"
          className="object-cover w-full h-full opacity-80"
        />
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
          <div className="relative bg-white rounded-lg w-[90%] max-w-md max-h-[90vh] my-8 overflow-y-auto p-5">
            <button
              className="absolute top-3 right-3 text-black text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2
              className="text-3xl font-mont tracking-wide font-bold mb-4 text-center uppercase"
              style={{ color: selectedCategory.clr }}
            >
              {selectedCategory.text}
            </h2>
            {selectedCategory.data && selectedCategory.data.length > 0 ? (
              <ul className="list-disc pl-5 text-gray-900 text-lg">
                {selectedCategory.data.map((item, index) => (
                  <li key={index} className='font-mont text-xl font-semibold'>{item}</li>
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
