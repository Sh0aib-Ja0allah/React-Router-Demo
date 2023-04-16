import "./OrderSummary.css"
import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {

    const navigate = useNavigate();

    return (
        <div className="OrderSummaryComponent">
            <div className="Title">
                Order Summary Component ...
            </div>
            <button className="BackButton" onClick={() => navigate("/")}>
                Back Home
            </button>

            <br />
            
            <button className="BackButton" onClick={() => navigate(-1)}>
                Previous page
            </button>
        </div>
    );
}