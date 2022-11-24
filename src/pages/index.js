import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Loading from "../shared/components/Loading";

const Page404 = lazy(() => import("./404"));
const CategoryPage = lazy(() => import("./Category"));
const DashboardPage = lazy(() => import("./Dashboard"));
const LoginPage = lazy(() => import("./Login"));
const ProductsPage = lazy(() => import("./Products"));
const RestaurantsPage = lazy(() => import("./Restaurants"));


export default function Pages() {



    return (
        <>

            <Routes>
                <Route path="/login" element={<Suspense fallback={<Loading />}> <LoginPage /> </Suspense>} />
                <Route path="/" element={<Navigate replace to={"login"} />} />
                <Route path="/dashboard" element={<Suspense fallback={<Loading />}> <DashboardPage /> </Suspense>} />
                <Route path="/category" element={<Suspense fallback={<Loading />}> <CategoryPage /> </Suspense>} />
                <Route path="/products" element={<Suspense fallback={<Loading />}> <ProductsPage /> </Suspense>} />
                <Route path="/restaurants" element={<Suspense fallback={<Loading />}><RestaurantsPage /></Suspense>} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </>
    );
};