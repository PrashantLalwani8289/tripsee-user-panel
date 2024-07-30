import React from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "../constants/routes";
// const PublicRoutes = lazy(() => import("./PublicRoutes"));
import PublicRoutes from "./PublicRoutes";
// const PrivateRoutes = lazy(() => import("./PrivateRoutes"));

// Importing components
import Blogs from "../pages/blogs/Blogs";
import Home from "../pages/home/home";
import SignUp from "../pages/signup/SignUp";
import SignIn from "../pages/signin/SignIn";
import PrivateRoute from "./PrivateRoutes";
// const home = lazy(() => import("../pages/home/home"));
// const Login = lazy(() => import("../pages/Login"));
// const Signup = lazy(() => import("../pages/Signup"));
// const Blog = lazy(() => import("../pages/blogs/Blogs"));
// const Profile = lazy(() => import("../pages/Profile"




interface RoutesConfigProps {
    isAuthenticated: boolean;
}

const RoutesConfig: React.FC<RoutesConfigProps> = ({ isAuthenticated }) => {
    return (
        // <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {/* Public Routes */}
            <Route
                path={ROUTES.HOME}
                element={
                    <PublicRoutes isAuthenticated={isAuthenticated} element={<Home />} />
                }
            />
            <Route
                path={ROUTES.BLOGS}
                element={
                    <PublicRoutes isAuthenticated={isAuthenticated} element={<Blogs />} />
                }
            />
            <Route
                path={ROUTES.SIGN_UP}
                element={
                    <PrivateRoute isAuthenticated={isAuthenticated} element={<SignUp />} />
                }
            />

            <Route
                path={ROUTES.SIGN_IN}
                element={
                    <PrivateRoute isAuthenticated={isAuthenticated} element={<SignIn />} />
                }
            />

            <Route
                path="/"
                element={
                    <Home />
                }
            />
            <Route
                path="*"
                element={
                    <Home />
                }
            />
        </Routes>
    );
};

export default RoutesConfig;