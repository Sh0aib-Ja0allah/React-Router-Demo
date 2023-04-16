import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
// import { About } from "./components/About/About";        // it's made as a lazy loading ...
import { Navbar } from "./components/Navbar/Navbar";
import { OrderSummary } from "./components/OrdersSummary/OrdersSummary";
import { NoMatch } from "./components/NoMatch/NoMatch";
import { Products } from "./components/Products/Products";
import { FeaturedProducts } from "./components/Products/FeaturedProducts/FeaturedProducts";
import { NewProducts } from "./components/Products/NewProducts/NewProducts";
import { Users } from "./components/Users/Users";
import { UserDetails } from "./components/Users/UserDetails/UserDetails";
import { Admin } from "./components/Users/Admin/Admin";
import { Profile } from "./components/Profile/Profile";
import { Login } from "./components/Login/Login";
import { LoadingPage } from "./components/LoadingPage/LoadingPage";
import { Authentication } from "./components/Authentication/Authentication";
import { RequireAuthentication } from "./components/RequireAuthentication/RequireAuthentication";

const LazyAbout = React.lazy( () => import('./components/About/About'))

function App() {
  return (
    <Authentication>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />                         {/* Home Page Route */}
        {/* <Route path="about" element={<About />} /> */}            {/* About page Route */}
        <Route path="about" element={                                 
          <React.Suspense fallback={<LoadingPage />}>
            <LazyAbout />
          </React.Suspense>
        } />                                                          {/* The Lazy Loading - and I have used the NO Match page as the loading page */}
        <Route path="order-summary" element={<OrderSummary />} />     {/* Route page has a programmatically Route */}
        <Route path="products" element={<Products />}>                {/* Route Page has a nested Routes */}
          <Route index element={<FeaturedProducts />} />              {/* An Index Route ( By default Route ) */}
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="*" element={<NoMatch />} />                      {/* A Route page displayed when user has an error */}
        <Route path="users" element={<Users />} >                     {/* Dynamic Route & URL params (useParams Hook) Search params (useSearchParams Hook) */}
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="profile" element={
          <RequireAuthentication>
            <Profile />
          </RequireAuthentication>
        } />
        <Route path="login" element={<Login />} />
        <Route path="loading" element={<LoadingPage />} />
      </Routes>
      </Authentication>
  );
}

export default App;
