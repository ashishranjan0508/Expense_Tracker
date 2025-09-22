
const Baseurl = "http://localhost:5000/api";



// User Registration API
export const registerUserApi = async (formData) => {
    try {
        const response = await fetch(`${Baseurl}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
         const data = await response.json();
         return { ok: response.ok, data };
    } catch (error) {
        console.error("Error in signup api:", error);
         return { ok: false, data: { error: "Network error" } }; 
    }
    
}





// User Login API

export const loginUserApi = async (formData) => {
    try{

    const response = await fetch( `${Baseurl}/users/login`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(formData)
    })
    
    const data = await response.json();
    console.log("Login API response data:", data);//-------------------------------
    
    return { ok: response.ok, data };
} catch(error) {
    console.log("Error in login api:", error);
    return{ok:false, data:{error:"Network error"}};
}

}





// Add Expenses API

export const addExpensesApi = async (formData) => {
  try {
    const response = await fetch(`${Baseurl}/users/expense`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData), 
    });

    const data = await response.json();
    console.log("Add Expenses API response data:", data);

    return { ok: response.ok, data };
  } catch (error) {
    console.log("Error in Expenses API", error);
    return { ok: false, data: { error: "Network error" } };
  }
};





//get expenses api

export const getExpensesApi = async () => {
  try {
    const response = await fetch(`${Baseurl}/users/expense`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const data = await response.json();
    console.log("Get Expenses API response data:", data);

    return { ok: response.ok, data };
  } catch (error) {
    console.log("Error in Get Expenses API", error);
    return { ok: false, data: { error: "Network error" } };
  }
};






//Post income api

export const addIncomeApi = async (formData) => {
  try {
    const response = await fetch(`${Baseurl}/users/income`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log("Add Income API response data:", data);

    return { ok: response.ok, data };
  } catch (error) {
    console.log("Error in Income API", error);
    return { ok: false, data: { error: "Network error" } };
  }
};






// get income api

export const getIncomeApi = async () => {
  try {
    const response = await fetch(`${Baseurl}/users/income`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    });
    const data = await response.json();
    return { ok: response.ok, data };
  } catch(error) {
    console.log("Error in Get Income API", error);
    return {ok: false, data: {error: "Network error in get income api"}}
  }

};






// Post Budget API

export const addBudgetApi = async (formData) => {
  try {
     const response = await fetch(`${Baseurl}/users/budget`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(formData)
     });

     const data = await response.json();
     return {ok: response.ok, data};
  } catch (error) {
     console.log("Error in Budget API", error);
     return {ok: false , data: {error: "Network error in post budget api"}};
  }
}




// Get Budget API
export const getBudgetApi = async () => {
      try{
      const response = await fetch(`${Baseurl}/users/budget`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
      const data = await response.json();
      return {ok: response.ok, data};

      } catch(error) {
        console.log("Error in Get Budget API", error);
        return {ok:false, data: {error: "Network error in get budget api"}};
      }
};


