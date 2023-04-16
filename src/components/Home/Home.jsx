import "./Home.css"
import { useNavigate } from "react-router-dom";

export const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="HomePage">
            <div className="Title">
                Home Page ...
            </div>
            <button className="GoButton" onClick={() => navigate("order-summary")}>
                Place Order
            </button>
            <div className="HomeData">
                <br />
                "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
            </div>
        </div>
    );
}