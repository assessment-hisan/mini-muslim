import React from 'react';
import  { useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { IoNotificationsCircle } from "react-icons/io5";
// Question Data Array
const questions = [
  {
    id: 1,
    foreground: "/morning.png",
    question: "What do you say when you wake up? ",
    answer: [
      { src: "/adhkar/a1.png", isCorrect: true },
      { src: "/adhkar/a2.png", isCorrect: false },
      { src: "/adhkar/a3.png", isCorrect: false },
    ],
  },
  {
    id: 2,
    foreground: "/morning.png",
    question: "What do you say when you enter the bathroom?",
    answer: [
      { src: "/adhkar/b2.png", isCorrect: false },
      { src: "/adhkar/b1.png", isCorrect: true },
      { src: "/adhkar/b3.png", isCorrect: false },
    ],
  },
  {
    id: 3,
    foreground: "/morning.png",
    question: "What do you say when you come back from the bathroom?",
    answer: [
      { src: "/adhkar/c1.png", isCorrect: true },
      { src: "/adhkar/c2.png", isCorrect: false },
      { src: "/adhkar/c3.png", isCorrect: false },
    ],
  },
  {
    id: 4,
    foreground: "/morning.png",
    question: "What do you say before eating?",
    answer: [
      { src: "/adhkar/d2.png", isCorrect: false },
      { src: "/adhkar/d3.png", isCorrect: false },
      { src: "/adhkar/b2.png", isCorrect: true },
    ],
  },
  {
    id: 5,
    foreground: "/morning.png",
    question: "What do you say after you finish eating?",
    answer: [
      { src: "/adhkar/d2.png", isCorrect: false },
      { src: "/adhkar/d3.png", isCorrect: false },
      { src: "/adhkar/a1.png", isCorrect: true },
    ],
  },
  {
    id: 6,
    foreground: "/morning.png",
    question: "What do you say before leaving home?",
    answer: [
      { src: "/adhkar/d2.png", isCorrect: false },
      { src: "/adhkar/d3.png", isCorrect: false },
      { src: "/adhkar/thw.png", isCorrect: true },
    ],
  },
  {
    id: 7,
    foreground: "/morning.png",
    question: "What do you say when hear the Azan?",
    answer: [
      { src: "/adhkar/b3.png", isCorrect: false },
      { src: "/adhkar/marb.png", isCorrect: true },
      { src: "/adhkar/thw.png", isCorrect: false },
    ],
  },
  {
    id: 8,
    foreground: "/morning.png",
    question: "What do you say when starting a journey?",
    answer: [
      { src: "/adhkar/jr.png", isCorrect: true },
      { src: "/adhkar/d3.png", isCorrect: false },
      { src: "/adhkar/thw.png", isCorrect: false },
    ],
  },
  {
    id: 9,
    foreground: "/morning.png",
    question: "What do you say when entering Masjid?",
    answer: [
      { src: "/adhkar/a3.png", isCorrect: false },
      { src: "/adhkar/entym.png", isCorrect: true },
      { src: "/adhkar/d2.png", isCorrect: false },
    ],
  },
  {
    id: 10,
    foreground: "/morning.png",
    question: "What do you say when you go out of Masjid?",
    answer: [
      { src: "/adhkar/entym.png", isCorrect: false },
      { src: "/adhkar/GGG.png", isCorrect: true },
      { src: "/adhkar/EXIT.png", isCorrect: true },
    ],
  },
  {
    id: 11,
    foreground: "/morning.png",
    question: "What do you say when you hear the name of Prophet Muhammed?",
    answer: [
      { src: "/adhkar/slm.png", isCorrect: false },
      { src: "/adhkar/sw.png", isCorrect: true },
      { src: "/adhkar/rz.png", isCorrect: false },
    ],
  },
  {
    id: 12,
    foreground: "/morning.png",
    question: "What do you say when you have a good news?",
    answer: [
      { src: "/adhkar/c1.png", isCorrect: false },
      { src: "/adhkar/c2.png", isCorrect: false },
      { src: "/adhkar/c3.png", isCorrect: true },
    ],
  },
  {
    id: 13,
    foreground: "/morning.png",
    question: "What do you say when you sleep?",
    answer: [
      { src: "/adhkar/sw.png", isCorrect: false },
      { src: "/adhkar/sleep.png", isCorrect: true },
      { src: "/adhkar/thw.png", isCorrect: false },
    ],
  },
];



// Question Component
const Question = ({ questionImage }) => (
  <div className='pt-6'>
    <h1 className='bg-yellow-500   shadow-2xl px-3  rounded-[3rem] py-7 tracking-tight uppercase  mb-7 mx-4 leading-7 text-2xl font-mont  font-bold text-white text-center'>{questionImage}</h1>
  </div>
);

// Answer Option Component
const AnswerOption = ({ image, altText, onClick }) => (
  <div className="w-48 rounded-xl cursor-pointer" onClick={onClick}>
    <img src={image} alt={altText} />
  </div>
);

const Modal = ({ message, onClose, onRetry, isCorrect }) => {
  const modalBackgroundColor = isCorrect ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50">
      <div className={`rounded-lg p-5 text-center ${modalBackgroundColor} relative`}>
        

        {/* Feedback Message */}
        <h2 className="text-2xl font-bold mb-4 text-white">{message}</h2>

        {/* Buttons */}
        <div className="flex justify-center gap-3">
          <button
            onClick={onRetry}
            className="px-4 py-2 rounded-lg bg-yellow-500 text-white"
          >
            Retry
          </button>
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-lg text-white ${isCorrect ? 'bg-blue-600' : 'bg-gray-600'}`}
          >
            {isCorrect ? 'Next' : 'Skip'}
          </button>
        </div>
      </div>
    </div>
  );
};
// Final Results Modal Component
const FinalResultsModal = ({ correctAnswers, totalQuestions, onClose }) => (
  <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50">
    <div className="bg-white rounded-lg p-5 text-center">
      <h2 className="text-2xl font-bold">Congratulations!</h2>
      <p className="mb-4">
        
        <br />
         <span className='text-5xl font-bold text-lime-700 bg-lime-200 px-5'>{correctAnswers}</span>
        <br />
         <span className='text-3xl font-bold text-orange-700'>{totalQuestions - correctAnswers}</span>
      </p>
      <Link to="/" className="mr-3 px-4 py-2 rounded-lg bg-blue-600 text-white">
        Go Home
      </Link>
      <button
        onClick={onClose}
        className="px-4 py-2 rounded-lg bg-green-600 text-white"
      >
        Retry Quiz
      </button>
    </div>
  </div>
);

// Main Adhkar Component
const Adhkar = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [points, setPoints] = useState(() => Number(localStorage.getItem('points')) || 0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [modalState, setModalState] = useState({ message: null, isCorrect: null });
  const [showFinalResultsModal, setShowFinalResultsModal] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setPoints((prevPoints) => {
        const newPoints = prevPoints + 1;
        localStorage.setItem('points', newPoints);
        return newPoints;
      });
      setCorrectAnswers((prev) => prev + 1);
      setModalState({ message: 'Correct Answer!', isCorrect: true });
    } else {
      setModalState({ message: 'Incorrect Answer. Try Again!', isCorrect: false });
    }
  };

  const closeModal = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // Show final results modal after the last question
      setShowFinalResultsModal(true);
    }
    
    setModalState({ message: null, isCorrect: null });
  };

  const handleRetry = () => {
    // Reset modal state and allow retrying the current question
    setModalState({ message: null, isCorrect: null });
  };

  const handleFinalResultsClose = () => {
    // Reset quiz state
    setCurrentQuestionIndex(0);
    setPoints(0);
    setCorrectAnswers(0);
    localStorage.setItem('points', '0');
    setShowFinalResultsModal(false);
  };

  return (
    <div className='relative view bg-gray-50'>
      {/* Background Image */}
      <div className='fixed inset-0 z-10'>
        <img src="/sky.jpg" alt='Background' className='w-full h-[100vh] object-cover opacity-50' />
      </div>

      {/* Foreground Image positioned at the bottom */}
      <div className='fixed z-10 bottom-0 left-0 w-full flex justify-center'>
        <img src={currentQuestion.foreground} alt='Foreground' className='object-cover mb-4' />
      </div>

    

      <div className='max-w-md mx-auto relative z-10 py-10'>
        {/* Header */}
        {/* <Header title='Adhkhar' linkPath='/' linkText='Home' /> */}

        {/* Question Index Display */}
        <div className="text-center my-2  ">
          <div className='relative  px-6 pr-10  py-2  flex justify-between items-center w-full mb-4'>
                        <Link to="/">
                        <div className='bg-black/10 ring-1 ml-5 ring-black/10 rounded-xl px-2 py-1 text-base font-mont flex justify-center items-center font-semibold'>
                          <span><FaArrowLeftLong className='mr-2 text-lg'/></span> Back
                        </div>
                        </Link>
                        <div className=''>
                          <IoNotificationsCircle className='text-[2.7rem] text-black'/>
                        </div>
                      </div>
        <h2 className="inline text-2xl bg-indigo-500 shadow-inner px-5 py-2 font-mont rounded-lg text-white ">
            Question {currentQuestionIndex + 1} 
          </h2>
        </div>

        {/* Question */}
        <Question questionImage={currentQuestion.question} />

        {/* Answer Options */}
        <div className='flex-center flex-wrap  py-5'>
          {currentQuestion.answer.map(({ src, isCorrect }, index) => (
            <AnswerOption
              key={index}
              image={src}
              altText={`Answer ${index + 1}`}
              onClick={() => handleAnswerClick(isCorrect)}
            />
          ))}
        </div>

        {/* Points Display */}
        {/* <div className="absolute bottom-[100px] right-[20px] text-center">
          <h2 className="text-xl font-bold">Points: {points}</h2>
        </div> */}
      </div>

      {/* Modal for answer feedback */}
      {modalState.message && (
        <Modal
          message={modalState.message}
          isCorrect={modalState.isCorrect}
          onClose={closeModal}
          onRetry={handleRetry}
        />
      )}

      {/* Final Results Modal */}
      {showFinalResultsModal && (
        <FinalResultsModal
          correctAnswers={correctAnswers}
          totalQuestions={questions.length}
          onClose={handleFinalResultsClose}
        />
      )}
      
    </div>
  );
};

export default Adhkar;
