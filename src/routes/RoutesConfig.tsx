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
import BlogEditor from "../pages/blogEditor/BlogEditor";
import About from "../pages/about/About";
import Error from "../pages/error/Error";
import Contact from "../pages/contact/Contact";
import Article from "../pages/article/Article";
import Category from "../pages/category/Category";
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
                path={ROUTES.ABOUT}
                element={
                    <PublicRoutes isAuthenticated={isAuthenticated} element={<About />} />
                }
            />
            <Route
                path={ROUTES.EDITOR}
                element={
                    <PublicRoutes isAuthenticated={isAuthenticated} element={<BlogEditor />} />
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
                path={ROUTES.CONTACT}
                element={
                    <PublicRoutes isAuthenticated={isAuthenticated} element={<Contact />} />
                }
            />
            <Route
                path={ROUTES.ARTICLE}
                element={
                    <PublicRoutes isAuthenticated={isAuthenticated} element={<Article />} />
                }
            />
            <Route
                path={ROUTES.CATEGORY}
                element={
                    <PublicRoutes isAuthenticated={isAuthenticated} element={<Category />} />
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
                    <Error/>
                }
            />
        </Routes>
    );
};

export default RoutesConfig;