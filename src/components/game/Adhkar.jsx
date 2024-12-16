import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Question Data Array
const questions = [
  {
    id: 1,
    foreground: "/morning.png",
    question: "What do you say when you wake up ",
    answer: [
      { src: "/adhkar/a1.png", isCorrect: true },
      { src: "/adhkar/a2.png", isCorrect: false },
      { src: "/adhkar/a3.png", isCorrect: false },
    ],
  },
  {
    id: 2,
    foreground: "/morning.png",
    question: "/question/q2.png",
    answer: [
      { src: "/adhkar/b1.png", isCorrect: false },
      { src: "/adhkar/b2.png", isCorrect: true },
      { src: "/adhkar/b3.png", isCorrect: false },
    ],
  },
  {
    id: 3,
    foreground: "/morning.png",
    question: "/question/q3.png",
    answer: [
      { src: "/adhkar/c1.png", isCorrect: false },
      { src: "/adhkar/c2.png", isCorrect: true },
      { src: "/adhkar/c3.png", isCorrect: false },
    ],
  },
];

// Header Component
const Header = ({ title, linkPath, linkText }) => (
  <div className='h-32 mx-10 rounded-b-3xl bg-white pb-10'>
    <Link to={linkPath}>
      <p className='pl-5 text-blue-800 text-lg top-4'>{linkText}</p>
    </Link>
    <h1 className='text-5xl text-indigo-950 font-bold pb-5 text-center'>{title}</h1>
  </div>
);

// Question Component
const Question = ({ questionImage }) => (
  <div>
    <h1 className='bg-yellow-500  shadow-yellow-200 shadow-2xl px-3  rounded-full py-7 tracking-tight uppercase  mb-7 mx-4 text-3xl font-semibold text-white text-center'>{questionImage}</h1>
  </div>
);

// Answer Option Component
const AnswerOption = ({ image, altText, onClick }) => (
  <div className="w-44 rounded-xl cursor-pointer" onClick={onClick}>
    <img src={image} alt={altText} />
  </div>
);

// Modal Component for Answer Feedback
const Modal = ({ message, onClose, onRetry, isCorrect }) => {
  const modalBackgroundColor = isCorrect ? 'bg-green-500' : 'bg-red-500';
  
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50">
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

// Final Results Modal Component
const FinalResultsModal = ({ correctAnswers, totalQuestions, onClose }) => (
  <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50">
    <div className="bg-white rounded-lg p-5 text-center">
      <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
      <p className="mb-4">
        You've completed the quiz!
        <br />
        Correct Answers: {correctAnswers}
        <br />
        Incorrect Answers: {totalQuestions - correctAnswers}
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

      <div className='max-w-md mx-auto relative z-10'>
        {/* Header */}
        <Header title='Adhkhar' linkPath='/' linkText='Home' />

        {/* Question Index Display */}
        <div className="text-center my-4">
          <h2 className="text-xl">Question {currentQuestionIndex + 1} of {questions.length}</h2>
        </div>

        {/* Question */}
        <Question questionImage={currentQuestion.question} />

        {/* Answer Options */}
        <div className='flex-center flex-wrap gap-2 py-5'>
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
