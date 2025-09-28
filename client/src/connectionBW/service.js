import { apiCall } from "./apiHandler";

// User Registration Api 
export const registerUserApi = (formData) => {
    const endpoint = '/users/register';
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    };
    return apiCall(endpoint, config);
}

// User Login API

export const loginUserApi = (formData) => {  
     const endpoint = '/users/login';
     const config = {
         method: "post",
         headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(formData)
     }
     return apiCall(endpoint, config);
}

// Add Expenses API

export const addExpensesApi = async (formData) => {

   const endpoint = '/users/expense';
   const config = {
     method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData), 
   }

   return apiCall(endpoint, config);
};


//get expenses api

export const getExpensesApi = async () => {
   const endpoint = '/users/expense';
   const config = {
    method : "GET",
    headers : {
     "Authorization" : `Bearer ${localStorage.getItem("token")}`,
    },
   }
   return apiCall(endpoint, config);
};


//Post income api

export const addIncomeApi = async (formData) => {
  const endpoint = '/users/income';
  const config = {
     method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
  };

  return apiCall(endpoint, config);
};


// get income api

export const getIncomeApi = () => {
  const endpoint = '/users/income';
  const config = {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    }
  };

  return apiCall(endpoint, config);
};


// Post Budget API
 export const addBudgetApi = async (formData) => {
  const endpoint = '/users/budget';
  const config = {
     method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
  };

  return apiCall(endpoint, config);
};

// Get Budget API

export const getBudgetApi = () => {
  const endpoint = '/users/budget';
  const config = {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    }
  };

  return apiCall(endpoint, config);
};
