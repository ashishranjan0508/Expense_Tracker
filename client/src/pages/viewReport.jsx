import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import ResponsiveAppBar from '../components/AppBar';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

  const ViewReport = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const IncomeRawData = location.state?.incomeData;
  const ExpenseRawData = location.state?.expensesData;
  const BudgetRawData = location.state?.budgetData;


  //  Income Chart Data Preparation ---
  const incomeChartData = useMemo(() => {
    const incomeData = Array.isArray(IncomeRawData?.income) ? IncomeRawData.income : [];
    const aggregated = {};

    incomeData.forEach(element => {
      const source = element.source;
      const amountIncome = parseFloat(element.amount);
      if (!isNaN(amountIncome)) {
        if (
          source !== "Salary" && 
          source !== "Business" && 
          source !== "Investments" &&
          source !== "Allowance" && 
          source !== "Petty Cash"
        ) {
          aggregated["Other"] = (aggregated["Other"] || 0) + amountIncome;
        } else {
          aggregated[source] = (aggregated[source] || 0) + amountIncome;
        }
      }
    });

    // Prepare data for the chart right here
    return {
      labels: Object.keys(aggregated),
      datasets: [{
        label: 'Total Income',
        data: Object.values(aggregated),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }],
    };
  }, [IncomeRawData]);

  // Expense Chart Data Preparation ---
  const expenseChartData = useMemo(() => {
    const expenseData = Array.isArray(ExpenseRawData?.expenses) ? ExpenseRawData.expenses : [];
    const aggregated = {};
    expenseData.forEach(element => {
      const expenseCategory = element.category;
      const amountExpense = parseFloat(element.amount);
      if (!isNaN(amountExpense)) {
        if (
          expenseCategory !== "Food" &&
          expenseCategory !== "Social Life" && 
          expenseCategory !== "Transport" &&
          expenseCategory !== "Household" && 
          expenseCategory !== "Apparel" && 
          expenseCategory !== "Beauty" &&
          expenseCategory !== "Health" && 
          expenseCategory !== "Education" && 
          expenseCategory !== "Gift"
        ) {
          aggregated["Other"] = (aggregated["Other"] || 0) + amountExpense;
        } else {
          aggregated[expenseCategory] = (aggregated[expenseCategory] || 0) + amountExpense;
        }
      }
    });

    return {
      labels: Object.keys(aggregated),
      datasets: [{
        label: 'Total Expenses',
        data: Object.values(aggregated),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      }],
    };
  }, [ExpenseRawData]);

  //  Budget Chart Data Preparation ---
  const budgetChartData = useMemo(() => {
    const budgetData = Array.isArray(BudgetRawData?.budgets) ? BudgetRawData.budgets : [];
    const aggregated = {};
    budgetData.forEach(element => {
      const budgetCategory = element.category;
      const amountBudget = parseFloat(element.amount);
      if (!isNaN(amountBudget)) {
        if (
          budgetCategory !== "Food" && 
          budgetCategory !== "Social Life" && 
          budgetCategory !== "Transport" &&
          budgetCategory !== "Household" && 
          budgetCategory !== "Apparel" && 
          budgetCategory !== "Beauty" &&
          budgetCategory !== "Health" && 
          budgetCategory !== "Education" && 
          budgetCategory !== "Gift"
        ) {
          aggregated["Other"] = (aggregated["Other"] || 0) + amountBudget;
        } else {
          aggregated[budgetCategory] = (aggregated[budgetCategory] || 0) + amountBudget;
        }
      }
    });

    return {
      labels: Object.keys(aggregated),
      datasets: [{
        label: 'Total Budget',
        data: Object.values(aggregated),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      }],
    };
  }, [BudgetRawData]);


  const barOptions = {
    responsive: true,
    scales: {
      y: { beginAtZero: true },
    },
  };
//----------------------------------------------------------------------------------

const combinedExpenseBudgetData = useMemo(() => {
 
  const categoriesSet = new Set([
    ...expenseChartData.labels,
    ...budgetChartData.labels,
  ]);
  const categories = Array.from(categoriesSet);

 
  const expenseLookup = {};
  expenseChartData.labels.forEach((cat, i) => {
    expenseLookup[cat] = expenseChartData.datasets[0].data[i];
  });

  const budgetLookup = {};
  budgetChartData.labels.forEach((cat, i) => {
    budgetLookup[cat] = budgetChartData.datasets[0].data[i];
  });

  
  const combinedExpenseValues = [];
  const combinedBudgetValues = [];

  categories.forEach(cat => {
    combinedExpenseValues.push(expenseLookup[cat] || 0);
    combinedBudgetValues.push(budgetLookup[cat] || 0);
  });

  return {
    labels: categories,
    datasets: [
      {
        ...expenseChartData.datasets[0],
        data: combinedExpenseValues,
      },
      {
        ...budgetChartData.datasets[0],
        data: combinedBudgetValues,
      },
    ],
  };
}, [expenseChartData, budgetChartData]);


//-----HTML PArt--------------------------------------------------------------------------------
  return (
  <div >
    <ResponsiveAppBar/>
    <div className="w-[90%] max-w-[800px] mx-auto font-sans m-8">
    <h1 className="text-3xl font-bold text-gray-800 text-center">Income Details</h1>
   <div className="flex justify-end mb-6">
     <button
      onClick={() => navigate(-1)}
      className="bg-indigo-600 hover:bg-indigo-700 
      text-white font-bold py-2 px-4 rounded-lg transition-colors cursor-pointer"
     >
      &larr; Go Back
     </button>
   </div>

     
     <div className="mb-12">
  <Bar
    options={{
      ...barOptions,
      plugins: {
        ...barOptions.plugins,
        title: { display: true, text: 'Expenses vs Budget by Category' },
      },
    }}
    data={combinedExpenseBudgetData}
  />
</div>


    <div className="mb-12">
      <Bar
        options={{
          ...barOptions,
          plugins: {
            ...barOptions.plugins,
            title: { display: true, text: 'Income by Source' },
          },
        }}
        data={incomeChartData}
      />
    </div>

    <div className="mb-12">
      <Bar
        options={{
          ...barOptions,
          plugins: {
            ...barOptions.plugins,
            title: { display: true, text: 'Expenses by Category' },
          },
        }}
        data={expenseChartData}
      />
    </div>

    <div>
      <Bar
        options={{
          ...barOptions,
          plugins: {
            ...barOptions.plugins,
            title: { display: true, text: 'Budget by Category' },
          },
        }}
        data={budgetChartData}
      />
    </div>

    </div>

  </div>
);
  }
export default ViewReport;
