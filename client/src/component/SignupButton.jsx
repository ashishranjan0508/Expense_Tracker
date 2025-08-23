import React from 'react';
import {useNavigate} from "react-router-dom"

const SignupButton = ({ label }) => {
     const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/Signup")}>{label}</button>
  );
};

export default SignupButton;
