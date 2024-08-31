import React from "react";
import { useAuth } from "./Hooks/useAuth";
import { Navigate } from "react-router-dom";
export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn } = useAuth();
    const shouldRedirect = isLoggedIn;
    return shouldRedirect ? <Navigate to={redirectTo } /> : Component;
};