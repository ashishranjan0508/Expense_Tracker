
import { useState } from "react";
import { loginUserApi } from "../connectionBW/service.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';




const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  }); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Logging in...");

    const result = await loginUserApi(formData);
    console.log(result);
    if (result.ok) {
      toast.update(toastId, {
        render: "Login successful!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      localStorage.setItem("token", result.data.token);
      navigate("/dashboard");

    } else {
      toast.update(toastId, {
        render: result.data.error || "Login failed!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50 flex flex-col items-center p-4">
      <div className="sm:w-full md:w-1/3 lg:w-1/3 bg-gray-100 shadow-md rounded-lg p-6">
        <div className="flex justify-center text-2xl font-bold">Login</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mt-4">
              Email:
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="Enter your email" 
                className="mt-1 block w-full border border-gray-300 rounded-md p-2" 
                onChange={handleChange} 
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mt-4">
              Password:
              <input 
                type="password" 
                name="password" 
                required 
                placeholder="Enter your password" 
                className="mt-1 block w-full border border-gray-300 rounded-md p-2" 
                onChange={handleChange} 
              />
            </label>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 cursor-pointer m-4"
          >
            Login
          </button>
        </form>
        <span className="block text-center mt-4">
          Don't have an account? <Link to="/signup" className="text-blue-500">Signup</Link>
        </span>
      </div>
     
    </div>
  );
};

export default Login;