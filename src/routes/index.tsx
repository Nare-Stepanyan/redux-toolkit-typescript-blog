import React, { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = lazy(() => import("pages/login"));
const Register = lazy(() => import("pages/register"));
const Home = lazy(() => import("pages/home"));
const Profile = lazy(() => import("pages/profile"));
const Article = lazy(() => import("pages/article"));

const AppRoutes: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if (!(userData && userData.id)) {
      navigate("login");
    }
  }, []);
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
