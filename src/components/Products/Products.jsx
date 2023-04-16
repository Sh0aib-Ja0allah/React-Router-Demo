import { Link, Outlet } from "react-router-dom";
import "./Products.css"

export const Products = () => {
    return (
        <div className="ProductsPage">
            <div className="SearchDiv">
                <input type="search" placeholder="Search for a product ..." className="SearchComponent" />
            </div>
            <div className="NestedNav">
                <Link to="featured" className="PageLink">Featured</Link>
                <Link to="new" className="PageLink">New</Link>
            </div>
            <div className="NestedRoutes">
                <Outlet />
            </div>
        </div>
    );
}