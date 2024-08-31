import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Hooks/useAuth";
export const PrivateRoute = ({ component: Component, redirectTo = "/"}) => {
    const { isLoggedIn } = useAuth();
    const shouldRedirect = !isLoggedIn;
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};