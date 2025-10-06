// const Baseurl = process.env.VITE_API_BASE_URL;
const Baseurl = import.meta.env.VITE_API_BASE_URL;
// "http://localhost:5000/api";

export const apiCall = async (endpoint, config = {}) => {
   try {
       const response = await fetch(`${Baseurl}${endpoint}`, config);
       const data = await response.json();
       return { ok: response.ok, data };
   } catch (error) {
       console.error("Api call failed", error);
       return { ok: false, data: { error: "Network error" } };
   }
}

// const Baseurl = process.env.REACT_APP_API_URL;
// if (!Baseurl) {
//   console.error("VITE_API_BASE_URL is not set. Please check your .env file.");
// }
// export const apiCall = async (endpoint, config = {}) => {
//     try {

//         const response = await fetch(`${Baseurl}${endpoint}`, config);
//         const data = await response.json();
//         return { ok: response.ok, data };
//     } catch (error) {
//         console.error("Api call failed", error);
//         return { ok: false, data: { error: "Network error" } };
//     }
// }