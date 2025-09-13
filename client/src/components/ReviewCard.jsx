const ReviewCard = ({ label }) => {
  return (
    <div className="flex flex-col items-center w-full sm:w-80 md:w-72 lg:w-90 p-4 bg-gray-300 h-auto lg:h-48 border
     border-gray-300 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-lg font-semibold">{label.name}</div>
      <div className="py-2"> {[...Array(label.rating)].map((_, i) => (<span key={i}>⭐</span>))} </div>
      <div className="p-3 text-center text-gray-600">{label.comment}</div>
    </div>
  );
};

export default ReviewCard;