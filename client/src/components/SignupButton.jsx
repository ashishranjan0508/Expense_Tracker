import React from 'react';
import {useNavigate} from "react-router-dom"

const SignupButton = ({ label }) => {
     const navigate = useNavigate();
  return (
    <div>
         <button onClick={() => navigate("/Signup")}>{label}</button>
         <div className='text-red-600'> hsjihsjjsk</div>
    </div>
  );
    
   
};

export default SignupButton;