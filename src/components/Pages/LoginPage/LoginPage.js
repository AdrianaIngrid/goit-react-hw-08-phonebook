import React from "react";
import LoginForm from "../../LoginForm/LoginForm.jsx"; 
import css from './LoginPage.module.css';


export default function LoginPage () {
    return (
        <div className={css.loginpage}>
            <h4>Login</h4>
            <LoginForm />
        </div>
        
    );
}