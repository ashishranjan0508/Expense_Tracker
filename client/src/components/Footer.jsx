import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-gray-100 text-gray-600 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        <div className="mb-4 md:mb-0">
          © 2025 Expense Tracker. All rights reserved. (Patna, India)
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div onClick={() => navigate('/privacy')} className="hover:text-blue-600 cursor-pointer">Privacy Policy</div>
          <div onClick={() => navigate('/terms')} className="hover:text-blue-600 cursor-pointer">Terms of Service</div>
          <div onClick={() => window.location.href = "mailto:ashishranjan2052@gmail.com"} className="hover:text-blue-600 cursor-pointer">Contact Support</div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;