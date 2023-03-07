import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Login = lazy(() => import("pages/login"));
const Register = lazy(() => import("pages/register"));
const Home = lazy(() => import("pages/home"));
const Profile = lazy(() => import("pages/profile"));
const Article = lazy(() => import("pages/article"));

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/article/:id" element={<Article />} />
        </Routes>
    );
};

export default AppRoutes;
