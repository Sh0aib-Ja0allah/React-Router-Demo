import { useAuthentication } from "../Authentication/Authentication";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {

    const auth = useAuthentication()

    return (
        <div className="NavbarComponent">
            <Link className="PageLink" to="/" >Home</Link> 
            <Link className="PageLink" to="about">About</Link>  {/* the Common react router link ( Link ) */}
            <Link className="PageLink" to="products">Products</Link>  
            <Link className="PageLink" to="profile">Profile</Link>

            {
                !auth.userName && <Link className="PageLink" to="login">Login Page</Link>
            }

            <NavLink to="about" >About Active Link</NavLink> {/* the active react router link ( Active Link ) */}
        </div>
    );
}