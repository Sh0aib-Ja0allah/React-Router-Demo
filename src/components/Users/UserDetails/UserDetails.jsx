import "./UserDetails.css"
import { useParams } from "react-router-dom";

export const UserDetails = () => {
    const params = useParams();
    const userId = params.userId;
    return (
        <div className="UserDetailsPage">
            User Details ... the User is : {userId}
        </div>
    );
}

// it's used to display the user id that is in the URL in your web page ...