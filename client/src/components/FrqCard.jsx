import React, { useState } from "react";

const FrqCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border p-4 rounded-md shadow-md m-4">
   
      <div className="font-semibold mb-2">{question}</div>
      <button
        onClick={toggleAnswer}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        {isOpen ? "Hide Answer" : "Show Answer"}
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