import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import logo from '../assets/logoext.svg';
import applicationImage from '../assets/application_insight.png';
import FeaturesCard from '../components/FeaturesCard';
import ReviewCard from '../components/ReviewCard';
import FrqCard from '../components/FrqCard';
import Footer from '../components/Footer';


const Home = () => {
  const navigate = useNavigate();
  return (
  <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50 flex flex-col items-center">

    {/* Header */}
    <div className="flex justify-between items-center w-full px-8 py-4 bg-gray-100 shadow-md">
      <img src={logo} alt="Logo" className="h-12 w-auto" />
      <Button label="Login/ Signup" onClick={() => navigate("/login")} />
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
    <ReviewCard label={{ name: "Chanel", rating: 4, comment: "Very useful for managing my budget. It keeps my finances organized and stress-free." }} />
    <ReviewCard label={{ name: "Reyansh", rating: 5, comment: "A must-have app for everyone! It makes tracking expenses simple and efficient." }} />
  </div>
</div>

     {/*Frequently Asked Questions Section. I will do it later*/}

    <FrqCard question="How do I add a new expense or income?" answer="After logging in, you will find an 'Add Expense' button on the dashboard." />
    <FrqCard question="Can I create my own custom categories?" answer="Yes, if the default options aren't suitable, you can select 'Other' to write your own custom category." />
    <FrqCard question="How can I see a summary of my spending?" answer="Navigate to the 'Reports' or 'Dashboard' tab to view charts and detailed breakdowns of your spending by category, date range, or payment method." />
    <FrqCard question="Is it possible to set a monthly budget?" answer="Absolutely. In the 'Budgets' section, you can set a total monthly budget or create specific budgets for different categories to help you stay on track." />
    <FrqCard question="Is my financial data secure?" answer="Yes, your data is safe with us. " />
    

    {/* Footer */}
    <Footer/>
  </div>
);


};

export default Home;