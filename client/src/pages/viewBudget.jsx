import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import ResponsiveAppBar from '../components/AppBar';


const viewBudget = () => {

  const location = useLocation();
  const navigate = useNavigate();

     const rawData = location.state?.budgetData;
     const budgetData = Array.isArray(rawData?.budgets) ? rawData.budgets : [];
     

    useEffect(() => {
       if (budgetData.length === 0) {
         toast.info("No expenses data to display. Redirecting to dashboard.");
         navigate("/dashboard");
       }
     }, [budgetData, navigate]);

     if(budgetData.length === 0) {
      return(<div className='p-8 text-center'>There is no budgets to show</div>)
     }
   return (
    <div>
    <ResponsiveAppBar/>
    <div className="mt-4 p-4 md:p-8 max-w-6xl mx-auto bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Budget Details</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-indigo-600 hover:bg-indigo-700 
          text-white font-bold py-2 px-4 rounded-lg transition-colors cursor-pointer"
        >
          &larr; Go Back
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                category
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Date
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {budgetData.map((budgets) => (
              <tr key={budgets.id} className="hover:bg-gray-50">
                <td className="px-5 py-4 border-b border-gray-200 text-md">
                  {budgets.category}
                </td>
                <td className="px-5 py-4 border-b border-gray-200 text-md font-semibold text-red-700">
                  {Number(budgets.amount).toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                  })}
                </td>
                <td className="px-5 py-4 border-b border-gray-200 text-md text-gray-600">
                  {budgets.date
                    ? new Date(budgets.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : "N/A"}
                </td>
                <td className="px-5 py-4 border-b border-gray-200 text-md text-gray-800">
                  {budgets.description || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
     
      </div>
    </div>

  </div>
  );
}

export default viewBudget