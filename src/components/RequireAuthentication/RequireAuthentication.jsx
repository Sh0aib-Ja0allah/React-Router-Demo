import { Navigate, useLocation } from "react-router-dom";
import { useAuthentication } from "../Authentication/Authentication"
import "./RequireAuthentication.css"

export const RequireAuthentication = ({children}) => {
    
    const authentication = useAuthentication();
    const location = useLocation()

    if(!authentication.userName){
        return <Navigate to='/login' state={{path: location.pathname}} />
    }
    return children
}