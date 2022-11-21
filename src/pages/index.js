import { Route, Routes, Navigate } from "react-router-dom";
import Page404 from "./404";
import CategoryPage from "./Category";
import DashboardPage from "./Dashboard";
import LoginPage from "./Login";
import ProductsPage from "./Products";
import RestaurantsPage from "./Restaurants";


export default function Pages() {



    return (
        <>

            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<Navigate replace to={"login"} />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/category" element={<CategoryPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/restaurants" element={<RestaurantsPage />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </>
    );
};