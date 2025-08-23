import React from 'react';
import SignupButton from '../component/SignupButton';
import logo from '../assets/react.svg';

const Home = () => {
  return (
    <div className="flex justify-between w-full px-6 py-4 bg-white shadow-md">
      <img src={logo} alt="Logo" className="h-12 w-auto" />
      <SignupButton label="Sign Up"></SignupButton>
      <div>
        <span className="text-gray-600">Already have an account?</span>
        <button className="ml-2 text-blue-600 hover:underline">Log In</button>
        <div className='text-red-800'>Hello Bunny</div>
      </div>
    </div>
  );
};

export default Home;
