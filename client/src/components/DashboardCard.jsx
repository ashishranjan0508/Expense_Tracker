import React from 'react';

const colorVariants = {
  blue: 'bg-blue-500 text-white hover:bg-blue-600',
  green: 'bg-green-500 text-white hover:bg-green-600',
  red: 'bg-red-600 text-white hover:bg-red-700',
  yellow: 'bg-yellow-400 text-gray-800 hover:bg-yellow-500',
  default: 'bg-gray-300 text-gray-800 hover:bg-gray-400',
};

 const DashboardCard = ({ label, color = 'default', className = '', onClick }) => {

  const cardColorClasses = colorVariants[color] || colorVariants.default;

  const combinedClasses = `flex flex-col items-center justify-center w-full sm:w-80 p-6 rounded-lg shadow-md cursor-pointer  hover:shadow-xl  transition-all duration-300 ${cardColorClasses} ${className}`;

  return (
    <button type="button" onClick={onClick} className={combinedClasses}>
      <div className="text-xl font-bold mb-2 text-center">{label.title}</div>
      <div className="text-center text-white/80">{label.description}</div>
    </button>
  );
};

export default DashboardCard;