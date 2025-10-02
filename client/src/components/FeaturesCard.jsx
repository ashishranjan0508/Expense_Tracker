const FeaturesCard = ({ label }) => {
  return (
    <div className="flex flex-col items-center w-full sm:w-80 md:w-72 lg:w-90 p-4 bg-gray-300 h-auto lg:h-48 border border-gray-300 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-xl font-semibold mb-4 text-center">{label.title}</div>
      <div className="text-gray-600 text-center text-sm sm:text-base">{label.description}</div>
    </div>
  );
};

export default FeaturesCard;
