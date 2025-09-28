const Baseurl = "http://localhost:5000/api";

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