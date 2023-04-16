import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../Authentication/Authentication";
import "./Profile.css"

export const Profile = () => {

    const auth = useAuthentication();
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }

    return (
        <div className="ProfilePage">
            <div className="Title">
                Hello {auth.userName} - Here is your Profile Page ...
            </div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}