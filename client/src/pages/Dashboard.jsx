import ResponsiveAppBar from '../components/AppBar.jsx';
import DashboardCard from '../components/DashboardCard.jsx';
import { useNavigate } from 'react-router-dom';
import { getIncomeApi } from '../connectionBW/service.js';
import { getExpensesApi } from '../connectionBW/service.js';
import { toast } from 'react-toastify';


const Dashboard = () => {
  const navigate = useNavigate();

  const incomehandler =async () => {
     const result = await getIncomeApi();

     if(!result.ok) {
      toast.error("Failed to get data");
     } else {
       navigate("/viewIncome", { state: { incomeData: result.data } })

     }
  }

  const expenseshandler = async () => {
     const result = await getExpensesApi();

     if(!result.ok) {
      toast.error("Failed to get data");
     } else {
      navigate("/viewExpenses", {state: {expensesData : result.data}} )
     }
  }

  return (
    <div>
      <ResponsiveAppBar />
      
      <div className='flex justify-center p-8'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-24">

          <DashboardCard 
            onClick={ incomehandler }
            color="green" 
            label={{title: "Income", description:"Track your earnings"}}
          />

          <DashboardCard 
            onClick={ expenseshandler}
            color="red" 
            label={{title: "Expenses", description:"See where your money goes"}} 
          />
          
          <DashboardCard 
            onClick={() => navigate("/viewReport")}
            color="blue" 
            label={{title: "Reports", description:"Generate financial reports"}} 
          />
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;