import { createContext } from "react";
import { useState, useEffect } from "react";


export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
   
    const [token, setToken] = useState(null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
      }, [token]);

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    )
}