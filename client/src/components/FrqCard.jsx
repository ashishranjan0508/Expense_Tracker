import React, { useState } from "react";

const FrqCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
<div className="w-full md:w-3/4 lg:w-1/2 border p-4 rounded-md shadow-md m-4">
  <button
    onClick={toggleAnswer}
    className="w-full flex justify-between items-center text-left"
  >
    <span className="font-semibold">{question}</span>
    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 flex-shrink-0 transform transition-transform duration-200 ${
        isOpen ? 'rotate-180' : ''
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  {isOpen && (
    <div className="mt-4 text-gray-700">
      {answer}
    </div>
  )}
</div>    
  );
};

export default FrqCard;