import React, { useState } from 'react';

const honest = "Mother sent Ali to the shop. He bought some vegetables and sweets. On the way home, he saw some extra sweets in the bag. The shopkeeper hadn’t noticed it. He returned to the shop and gave it back. The shopkeeper refused to take it back and appreciated him for his honesty. Friends, honesty brings us a lot of benefits. People always love honest people. Honesty has a magical power. It can win the hearts of the people. Have you heard about a boy who told the truth to the robbers? He was from Jeelan of Iran. One day, he expressed his interest to travel to Baghdad to seek more knowledge. His mother agreed and gave him forty gold coins stitched in a pouch. Mother advised him not to lie at any cost. His travel was with a caravan. On the way, a group of robbers attacked them and looted the valuables. One of the robbers asked the boy whether he was keeping anything valuable. The boy replied “yes, I have forty gold coins with me”. Surprised by his reply, they frisked him. They got the coins. “What is your name?” - the robber asked. “Abdul Qadir” - the boy replied. “Why didn’t you lie and keep your coins safe?” - the robber asked. “My mother has advised me to say only the truth and not to lie at all” - the boy replied. Exclaimed with his reply, the robber repented and gave back all properties of the caravan. Friends, how honesty has changed the minds of the robbers! How it has ignited the spirit of virtue! This boy in the story is the famous Sheikh Abdul Qadir Jeelani. Telling the truth is a very good habit. If you always speak the truth, you can save yourself from a lot of troubles. To tell the truth, even if it is bitter, is the message of Islam. Our Prophet صلى الله عليه وسلم was famous for his truthfulness in his childhood. That’s why he was called ‘Al-Ameen’ (the truthful one). Let’s pledge that we will always tell the truth."
const pun = "Umar was studying in third grade. He was always late to the class. Teacher used to advise him to come on time. But he did nothing to change his habit. One day, the teacher decided to make Umar aware of the drawbacks of being late. On his birthday, the teacher gifted him a box. He opened it with much expectation. It was nothing but a stopped clock. A note was printed on it “ Be punctual. Be successful”. Seeing this, Umar understood the point the teacher was making. He became determined to be punctual and regular. He studied very well. He performed well than all the students in his class. His teacher noticed his drastic change. One day, she asked him to come to the front of the class. Patting on his shoulder, the teacher announced, “Look at Umar. He is a role model for all of us” -She motivated everyone to be like him. Friends, punctuality is a habit of doing things at the right time. It is the quality of being on time. It gives you more energy and enthusiasm. Punctuality is the key to success in life. A punctual student always gets respect and acceptance in the school and society. The parents and teachers admire them. Once a man asked our prophet “Which is the best act?” “The prayer in its right time,” - Prophet replied. Islam has always promoted punctuality. It leads to a productive life. It will make you feel happy rather than frustrated and guilty. May Allah help us be punctual. Aameen ."
const forgive = "Once our Prophet Muhammadصلى الله عليه وسلم travelled to Taif. The purpose of his visit was to invite its people to Islam. The people of Taif were rude and impolite. They were not willing to hear the new messasge. They laughed at the Prophet صلى الله عليه وسلم and scolded him. The leaders of Taif stirred up some gangs to abuse him. They shouted and threw stones at him. Our Prophet صلى الله عليه وسلم got injured. His feet were smeared with blood. He took refuge in a plantation. Allah sent the angel Jibreel q to support him. “Oh, Allah’s Messenger, should I crush these people between these two mountains?,” - the angel Jibreel q asked the Prophet. “Never, I hope that Allah will bring forth from their generations people who will worship Allah alone,” Prophet replied. Friends, how forgiving our Prophet صلى الله عليه وسلم was to the people of Taif!. He was so kind and merciful. He forgave them while he was able to take revenge on them. Forgiveness is the greatest part of our faith. No one is free from making mistakes.To err is human but to forgive is divine. To forgive, one requires a big heart and kind soul. Truly, it is a great virtue."
const smile = "One day, our Prophet Muhammadصلى الله عليه وسلم was walking with his companions. Suddenly, a bedouin (a nomadic Arab) grabbed his robe and pulled it from behind. “Give me the money of Allah that you have,” the bedouin said. The sudden pull hurt Prophet’s neck. Though he was suffering from pain, he smiled and ordered his companion to give bedouin some money. Friends, do you know a charity without spending money? Do you know the easiest way to make people happy? It is a smile. A simple smile costs you nothing. But it is priceless for whom you smile at. Islam has paid much attention on smile. Prophet صلى الله عليه وسلم was always cheerful and bright-faced. He always kept smiling in the face of his companions. Prophetصلى الله عليه وسلم says: “Do not belittle any good deed, even meeting your brother with a cheerful face”. Smile is the richest treasure that anyone can offer another. It’s a beautiful and powerful gesture. It will help you rise above enmity and insult. It will help you make your relationships sincere. If you smile at someone, he will definitely love you. A genuine smile stems from the depth of your heart. It can easily win the hearts of the people."
const res ="One day, an old woman got into a train. She walked from one end to another looking for a vacant seat. Unfortunately, all the seats in the compartment were occupied. She expected kindness from some passengers. But, even the young and healthy ones ignored her. Suddenly, a young girl got up and offered her seat to the old woman. The woman was happy and appreciated the girl. She managed to stand holding the handrail for a couple of hours. By the time night was falling, the ticket examiner came for inspection. When he verified the ticket of the old woman, he realised that the young girl had offered her seat to the woman. “Ma’am, there is a vacant seat in the next compartment. If you don’t mind, please go there and take the seat” - the examiner said to the girl. She nodded and thanked the examiner for his kindness. She took her crutches that were kept under the seat and moved on to the next compartment. Both the examiner and the old woman became surprised. All others felt ashamed when they saw a differently-abled girl limping towards the next compartment. Friends, imagine you are sitting in a chair in a clinic. You are waiting for the doctor and an old woman entered there. There are no seats available for her to sit in. What will you do? Would you pretend that you did not see her or would you get up and offer her your chair? If you are a good person you would get up from the chair and invite the old woman to sit down. This is one of the ways to respect the elders. Respecting elders is very important in Islam. Our Prophet was always respectful to elders. The Prophet Muhammad صلى الله عليه وسلم says: “He is not one of us who does not have mercy on our youngsters and does not respect our elders”. Our elders have made this world a better place to live for us. We have to respect them. May Allah bless us to remain respectful to elders - Aameen."
const stories = [
  {
    id: 1,
    image: '/story/figve.jpg',
    bg: "/story/bg/fg.png",
    head : "/story/head/fo.png",
    heading: 'Forgiveness',
    content: forgive
  },
  {
    id: 2,
    image: '/story/honest.jpg',
    bg: "/story/bg/pun.jpg",
    head : "/story/head/ho.png",
    heading: 'Honesty',
    content : honest
  },
  {
    id: 3,
    image: '/story/pun.jpg',
    bg: "/story/bg/pun.jpg",
    head : "/story/head/pun.png",
    heading: 'Punctuality',
    content: pun
  },
  {
    id: 4,
    image: '/story/smile.jpg',
    bg: "/story/bg/sm.jpg",
    head : "/story/head/sm.png",
    heading: 'Smile',
    content: smile
  },
  {
    id: 5,
    image: '/story/respect.jpg',
    head : "/story/head/re.png",
    bg: "/story/bg/re.jpg",
    heading: 'Respect',
    content: res
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
      {/* <h1 className="text-center py-2 text-3xl font-semibold mb-10">Story Mode</h1> */}
      <img src="/mrl.png" alt="" className='w-56 mx-auto mb-6'/>
      <div className="grid grid-cols-1 gap-6 px-10 overflow-y-auto">
        {stories.map((story) => (
          <div 
            key={story.id}
            className="relative  cursor-pointer rounded-lg shadow-md hover:shadow-xl transition-all max-w-[25rem] max-h-[20rem]"
            onClick={() => openModal(story)}
          >
            <img
              src={story.image}
              alt={story.heading}
              className="rounded-lg object-cover w-full h-72"
            />
            {/* Text Overlay */}
            <h2 className="absolute z-10 bottom-0 left-0 right-0 text-2xl font-bold text-black bg-white  p-2 text-center rounded-b-lg uppercase ">
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
        <div className="absolute inset-x-0 bottom-[20%]  p-6 text-lg text-gray-700 h-[55%] overflow-y-auto bg-gray-800/70 m-5 rounded-2xl"> {/* Adjusted height for scrollable content */}
          <p className='font-normal text-lg sm:text-xl text-white text-justify font-mont'>{selectedStory.content}</p>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Story;
