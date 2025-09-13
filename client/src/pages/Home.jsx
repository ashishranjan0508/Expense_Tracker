import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import logo from '../assets/logoext.svg';
import applicationImage from '../assets/application_insight.png';
import FeaturesCard from '../components/FeaturesCard';
import ReviewCard from '../components/ReviewCard';
import FrqCard from '../components/FrqCard';


const Home = () => {
  const navigate = useNavigate();
  return (
  <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50 flex flex-col items-center">

    {/* Header */}
    <div className="flex justify-between items-center w-full px-8 py-4 bg-gray-100 shadow-md">
      <img src={logo} alt="Logo" className="h-12 w-auto" />
      <Button label="Login" onClick={() => navigate("/login")} />
    </div>

    {/* Main Section1 */}
    <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 mt-10">

      <div className="flex flex-col  md:text-left md:w-1/2 pl-16">
         <div className='text-4xl font-semibold text-center'>Fastest way to Manage Your Expenses</div>
         <div className='text-xl text-center text-gray-600 mt-4 mb-8'>
         Track smarter, save better, and spend stress-free.</div>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end px-8 mt-16 md:mt-16">
        <img src={applicationImage} alt="Expense Tracking" className="h-96 w-auto" />
      </div>

    </div>
    {/* Main Section2 */}
 <div className="px-4 sm:px-8 md:px-16 mt-20 mb-8">
  <div className="text-2xl font-semibold text-center mb-8">Features</div>
  <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-20">
    <FeaturesCard label={{title: "Income Tracking", description:"Record income sources separately. View net balance after expenses."}} />
    <FeaturesCard label={{title: "Budget Planner", description:"Set monthly budgets by category. Notifications when approaching or exceeding limits."}} />
    <FeaturesCard label={{title: "Graphs & Insights", description:"Graphical representation of spending trends over time."}} />
  </div>
</div>


    {/* Main section 3 */}
 <div className="px-4 sm:px-8 md:px-16 mt-12 mb-8">
  <div className="text-2xl font-semibold text-center mb-8">Reviews</div>
  <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-20">
    <ReviewCard label={{ name: "Ashish Ranjan", rating: 5, comment: "Excellent app for tracking expenses! It helps me stay on top of my budget every day." }} />
    <ReviewCard label={{ name: "Sam Altman", rating: 4, comment: "Very useful for managing my budget. It keeps my finances organized and stress-free." }} />
    <ReviewCard label={{ name: "Mahatma Gandhi", rating: 5, comment: "A must-have app for everyone! It makes tracking expenses simple and efficient." }} />
  </div>
</div>

     {/*Frequently Asked Questions Section. I will do it later*/}

    <FrqCard question="How does expense tracking work?" answer="Our app allows you to manually enter expenses or link your bank account for automatic tracking." />
    <FrqCard question="How does expense tracking work?" answer="Our app allows you to manually enter expenses or link your bank account for automatic tracking." />
    <FrqCard question="How does expense tracking work?" answer="Our app allows you to manually enter expenses or link your bank account for automatic tracking." />
    <FrqCard question="How does expense tracking work?" answer="Our app allows you to manually enter expenses or link your bank account for automatic tracking." />
    <FrqCard question="How does expense tracking work?" answer="Our app allows you to manually enter expenses or link your bank account for automatic tracking." />
    

    {/* Footer */}
       
      <div>
        <footer className="w-full bg-gray-100 text-gray-600 py-6 mt-10">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
    
    <div className="mb-4 md:mb-0">
      © 2025 Expense Tracker. All rights reserved.
    </div>

    <div className="flex flex-col sm:flex-row gap-4">
      
      <div onClick={() => navigate('/privacy')} className="hover:text-blue-600 cursor-pointer">Privacy Policy</div>
      <div onClick={() => navigate('/terms')} className="hover:text-blue-600 cursor-pointer">Terms of Service</div>
      <div onClick={() => window.location.href = "mailto:support@expensetracker.com"} className="hover:text-blue-600 cursor-pointer">Contact Support</div>
    </div>
  </div>
</footer>

      </div> 
 

  </div>
);


};

export default Home;