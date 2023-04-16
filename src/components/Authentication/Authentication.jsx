import "./Authentication.css"
import { useState, createContext, useContext } from "react";

const AuthenticationContext = createContext(null);

export const Authentication = ({children}) => {

    const [userName, SetUserName] = useState(null);

    const login = user => {
        SetUserName(user)
    }

    const logout = () => {
        SetUserName(null)
    }

    return (
        <AuthenticationContext.Provider value={{userName, login, logout}}>
            {children}
        </AuthenticationContext.Provider>
    );
}

export const useAuthentication = () => {
    return (
        useContext(AuthenticationContext)
    );
}