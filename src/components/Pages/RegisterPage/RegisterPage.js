import React from "react";
import RegisterForm from "../../RegisterForm/RegisterForm";
import css from './RegisterPage.module.css';

export default function RegisterPage () {
    return (
      <div className={css.registerPage}>
        <h4>Registration</h4>
        <RegisterForm />
      </div>
    );
}