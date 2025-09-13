
const Button = ({ label,onClick }) => {
  return (
    <div>
         <button   onClick={onClick}
  className="
    bg-green-500 text-white 
    px-3 py-1.5 text-sm
    sm:px-4 sm:py-2 sm:text-base
    md:px-5 md:py-2 md:text-base
    lg:px-5 lg:py-2 lg:text-md
    rounded 
    hover:bg-green-700 
    hovor: cursor-pointer
    transition-all duration-300
  ">
  {label}
</button>

    </div>
  );
    
   
};

export default Button;