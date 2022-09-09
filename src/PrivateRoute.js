import { Navigate, Outlet } from "react-router";
import React from "react";

const useAuth = () => {
  return localStorage.getItem("isAuth");
};

export const PrivateRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export const AuthRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Navigate to="/system" /> : <Outlet />;
}


