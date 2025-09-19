import { createContext } from "react";
import { useState, useEffect } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = async () => await localStorage.getItem("token");

        if(storedToken) {
            setToken(storedToken);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    )
}