

import React, { useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoNotificationsCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';

// Question Data Array
const questions = [
  { id: 1, foreground: "/morning.png", question: "/question/q1.png", answer: [
    { src: "/routine/1.1.png", isCorrect: false },
    { src: "/routine/1.2.png", isCorrect: true },
    { src: "/routine/1.3.png", isCorrect: false },
  ] },
  { id: 2, foreground: "/niskaram.png", question: "/question/q3.png", answer: [
    { src: "/routine/3.1.png", isCorrect: true },
    { src: "/routine/3.2.png", isCorrect: false },
    { src: "/routine/3.3.png", isCorrect: false },
  ] },
  { id: 3, foreground: "/bathroom.png", question: "/question/q2.png", answer: [
    { src: "/routine/2.1.png", isCorrect: false },
    { src: "/routine/2.2.png", isCorrect: false },
    { src: "/routine/2.3.png", isCorrect: true },
  ] },
  { id: 4, foreground: "/bathroom.png", question: "/question/q4.png", answer: [
    { src: "/routine/4.1.png", isCorrect: false },
    { src: "/routine/4.2.png", isCorrect: true },
    { src: "/routine/4.3.png", isCorrect: false },
  ] },
  { id: 5, foreground: "/bathroom.png", question: "/question/q5.png", answer: [
    { src: "/routine/5.1.png", isCorrect: false },
    { src: "/routine/5.2.png", isCorrect: true },
  ] },
  { id: 6, foreground: "/bathroom.png", question: "/question/q6.png", answer: [
    { src: "/routine/6.1.png", isCorrect: true },
    { src: "/routine/6.2.png", isCorrect: false },
    { src: "/routine/6.3.png", isCorrect: false },
  ] },
  { id: 7, foreground: "/bathroom.png", question: "/question/q7.png", answer: [
    { src: "/routine/7.1.png", isCorrect: true },
    { src: "/routine/7.2.png", isCorrect: false },
    { src: "/routine/7.3.png", isCorrect: false },
  ] },
  { id: 8, foreground: "/bathroom.png", question: "/question/q8.png", answer: [
    { src: "/routine/8.1.png", isCorrect: false },
    { src: "/routine/8.2.png", isCorrect: false },
    { src: "/routine/8.3.png", isCorrect: true },
  ] },
  { id: 9, foreground: "/bathroom.png", question: "/question/q9.png", answer: [
    { src: "/routine/9.1.png", isCorrect: false },
    { src: "/routine/9.2.png", isCorrect: true },
    { src: "/routine/9.3.png", isCorrect: false },
  ] },
  { id: 10, foreground: "/bathroom.png", question: "/question/q10.png", answer: [
    { src: "/routine/10.1.png", isCorrect: false },
    { src: "/routine/10.2.png", isCorrect: false },
    { src: "/routine/10.3.png", isCorrect: true },
  ] },
];

// Header Component
// const Header = ({ title, linkPath, linkText }) => (
//   <div className="h-32 mx-10 rounded-b-3xl bg-white pb-10">
//     <Link to={linkPath}>
//       <p className="pl-5 text-blue-800 text-lg top-4">{linkText}</p>
//     </Link>
//     <h1 className="text-5xl text-indigo-950 font-bold pb-5 text-center">{title}</h1>
//   </div>
// );

// Question Component
const Question = ({ questionImage }) => (
  <div>
    <h1 className="text-3xl font-semibold">
      <img src={questionImage} alt="Question" />
    </h1>
  </div>
);

// Answer Option Component
const AnswerOption = ({ image, altText, onClick }) => (
  <div className="w-40 rounded-xl cursor-pointer" onClick={onClick}>
    <img src={image} alt={altText} />
  </div>
);

// Modal Component
const Modal = ({ message, onClose, onRetry, isCorrect }) => {
  const modalBackgroundColor = isCorrect ? 'bg-green-500' : 'bg-red-500';
  
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 ">
      <div className={`rounded-lg p-5 text-center ${modalBackgroundColor}`}>
        <h2 className="text-2xl font-bold mb-4 text-white">{message}</h2>
        <button
          onClick={onRetry}
          className="mr-3 px-4 py-2 rounded-lg bg-yellow-500 text-white"
        >
          Retry
        </button>
        <button
          onClick={onClose}
          className={`px-4 py-2 rounded-lg text-white ${isCorrect ? 'bg-blue-600' : 'bg-gray-600'}`}>
          {isCorrect ? 'Next' : 'Skip'}
        </button>
      </div>
    </div>
  );
};

// End Modal Component
const EndModal = ({ correctAnswers, totalQuestions, onClose }) => {
  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 modal-overlay"
      onClick={handleClickOutside}
    >
      <div className="bg-white rounded-lg p-5 text-center">
        <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
        <p className="mb-4">
        
        <br />
         <span className='text-5xl font-bold text-lime-700 bg-lime-200 px-5'>{correctAnswers}</span>
        <br />
         <span className='text-3xl font-bold text-orange-700'>{totalQuestions - correctAnswers}</span>
      </p>
        <Link
          to="/"
          className="mr-3 px-4 py-2 rounded-lg bg-blue-600 text-white"
        >
          Home
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
};

// Main Routine Component
const Routine = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [points, setPoints] = useState(() =>
    Number(localStorage.getItem("points")) || 0
  );
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [modalState, setModalState] = useState({ message: null, isCorrect: null });
  const [showEndModal, setShowEndModal] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setPoints((prevPoints) => {
        const newPoints = prevPoints + 1;
        localStorage.setItem("points", newPoints);
        return newPoints;
      });
      setCorrectAnswers((prev) => prev + 1);
      setModalState({ message: "Correct Answer!", isCorrect: true });
    } else {
      setModalState({ message: "Incorrect Answer. Try Again!", isCorrect: false });
    }
  };

  const closeModal = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowEndModal(true);
    }
    setModalState({ message: null, isCorrect: null });
  };

  const handleRetry = () => {
    setModalState({ message: null, isCorrect: null });
  };

  const handleEndModalClose = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setPoints(0);
    localStorage.setItem("points", 0);
    setShowEndModal(false);
  };

  return (
    <div className="relative view bg-gray-50">
      {/* Background Image */}
      <div className="fixed inset-0 z-10">
        <img
          src="/sky.jpg"
          alt="Background"
          className="w-full h-[100vh] object-cover opacity-50"
        />
      </div>

      {/* Foreground Image positioned at the bottom */}
      <div className="fixed z-10 bottom-0 left-0 w-full flex justify-center">
        <img
          src={currentQuestion.foreground}
          alt="Foreground"
          className="object-cover mb-4"
        />
      </div>

      <div className="max-w-md mx-auto relative z-10">
        {/* Header */}
        {/* <Header title="Routine" linkPath="/" linkText="Home" /> */}

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

        {/* Question Index Display */}
        <div className="text-center my-4 pt-6 ">
          <h2 className="inline text-2xl bg-indigo-500 shadow-inner px-5 py-2 font-mont rounded-lg text-white ">
            Question {currentQuestionIndex + 1} 
          </h2>
        </div>

        <div className="mt-5 px-10">
          {/* Question */}
          <Question questionImage={currentQuestion.question} />

          {/* Answer Options */}
          <div className="flex-center flex-wrap  py-5">
            {currentQuestion.answer.map(({ src, isCorrect }, index) => (
              <AnswerOption
                key={index}
                image={src}
                altText={`Answer ${index + 1}`}
                onClick={() => handleAnswerClick(isCorrect)}
              />
            ))}
          </div>
        </div>

        {/* Points Display */}
        {/* <div className="absolute bottom-[100px] right-[20px] text-center">
          <h2 className="text-xl font-bold">Points: {points}</h2>
        </div> */}
      </div>

      {/* Modal */}
      {modalState.message && (
        <Modal
          message={modalState.message}
          isCorrect={modalState.isCorrect}
          onClose={closeModal}
          onRetry={handleRetry}
        />
      )}

      {/* End Modal */}
      {showEndModal && (
        <EndModal
          correctAnswers={correctAnswers}
          totalQuestions={questions.length}
          onClose={handleEndModalClose}
        />
      )}
    </div>
  );
};

export default Routine;
