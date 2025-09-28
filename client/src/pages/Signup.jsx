import React, { useState } from "react";
import { registerUserApi } from "../connectionBW/service.js";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

      const result = await registerUserApi(formData);

      if (result.ok) {
        toast.success("Signup successful! Please login.");
      } else {
        toast.error(result.error || "Signup failed!");
      }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50 flex flex-col items-center p-4">
    
      <div className="sm:w-full md:w-1/3 lg:w-1/3 bg-gray-100 shadow-md rounded-lg p-6">
        <div className="flex justify-center text-2xl font-bold">Signup</div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mt-4">
              Name:
              <input type="text" name="name" required placeholder="Enter your name" className="mt-1 block w-full border border-gray-300 rounded-md p-2" onChange={handleChange} />
            </label>
          </div>
          <div>
            <label className="block text-gray-700 mt-4">
              Username:
              <input type="text" name="userName" required placeholder="Enter your username" className="mt-1 block w-full border border-gray-300 rounded-md p-2" onChange={handleChange} />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mt-4">
              Email:
              <input type="email" name="email" required placeholder="Enter your email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" onChange={handleChange} />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mt-4">
              Password:
              <input type="password" name="password" required placeholder="Enter your password" className="mt-1 block w-full border border-gray-300 rounded-md p-2" onChange={handleChange} />
            </label>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 cursor-pointer m-4">Signup</button>
        </form>
       <span className="block text-center mt-4">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
       </span>

      </div>
    </div>
  );
};

export default Signup;
