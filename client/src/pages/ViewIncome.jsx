import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ResponsiveAppBar from "../components/AppBar";

  const ViewIncome = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const rawData = location.state?.incomeData;
  console.log(rawData);
  const incomeData = Array.isArray(rawData?.income) ? rawData.income : [];

  useEffect(() => {
    if (incomeData.length === 0) {
      toast.info("No income data to display. Redirecting to dashboard.");
      navigate("/dashboard");
    }
  }, [incomeData, navigate]);

  if (incomeData.length === 0) {
    return <div className="p-8 text-center">No data found. Redirecting...</div>;
  }

  return (
    <div>
    <ResponsiveAppBar/>
    <div className="mt-4 p-4 md:p-8 max-w-6xl mx-auto bg-gray-50 min-h-screen">
    
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Income Details</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          &larr; Go Back
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Source
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Date
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Note
              </th>
            </tr>
          </thead>
          <tbody>
            {incomeData.map((income) => (
              <tr key={income.id} className="hover:bg-gray-50">
                <td className="px-5 py-4 border-b border-gray-200 text-md">
                  {income.source}
                </td>
                <td className="px-5 py-4 border-b border-gray-200 text-md font-semibold text-green-700">
                  {Number(income.amount).toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                  })}
                </td>
                <td className="px-5 py-4 border-b border-gray-200 text-md text-gray-600">
                  {income.date
                    ? new Date(income.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : "N/A"}
                </td>
                <td className="px-5 py-4 border-b border-gray-200 text-md text-gray-800">
                  {income.note || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default ViewIncome;
