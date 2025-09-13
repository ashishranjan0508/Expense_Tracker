import React, { useState } from "react";

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
    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        alert("Signup successful!");
      } else {
        alert(result.error || "Signup failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50 flex flex-col items-center p-4">
      <h1>Signup Page</h1>
      <div className="sm:w-full md:w-1/3 lg:w-1/3 bg-gray-100 shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">
              Name:
              <input type="text" name="name" required placeholder="Enter your name" className="mt-1 block w-full border border-gray-300 rounded-md p-2" onChange={handleChange} />
            </label>
          </div>
          <div>
            <label className="block text-gray-700">
              Username:
              <input type="text" name="userName" required placeholder="Enter your username" className="mt-1 block w-full border border-gray-300 rounded-md p-2" onChange={handleChange} />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Email:
              <input type="email" name="email" required placeholder="Enter your email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" onChange={handleChange} />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Password:
              <input type="password" name="password" required placeholder="Enter your password" className="mt-1 block w-full border border-gray-300 rounded-md p-2" onChange={handleChange} />
            </label>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 cursor-pointer">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
