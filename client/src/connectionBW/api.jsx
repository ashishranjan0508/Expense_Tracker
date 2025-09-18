
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


