import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/Auth/operations";
import styled from 'styled-components';
// Create a button variable and add CSS
const Button = styled.button`
  background: transparent;
  border-radius: 10px;
  border: 2px solid red;
  color:red;
  `
const LogoutButton = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };
    return <Button onClick={handleLogout}>Logout</Button>;
};
export default LogoutButton;