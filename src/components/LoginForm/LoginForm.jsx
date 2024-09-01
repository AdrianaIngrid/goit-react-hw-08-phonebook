import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Auth/operations";
import css from './LoginForm.module.css';


function LoginForm() {
    const dispatch = useDispatch();
    
const handlesubmit = event => {
  event.preventDefault();
  const form = event.currentTarget;
  dispatch(
    login({
      email: form.elements.email.value,
      password: form.elements.password.value,
    })
  );
};
    return (
      <div className={css.loginform}>
        <form
          action=""
          autoComplete="off"
          onSubmit={handlesubmit}
          className={css.glassLoginForm}
        >
          <label>
            Email
            <br />
            <input type="email" name="email" />
          </label>
          <br></br>
          <label>
            Password
            <br />
            <input type="password" name="password" />
          </label>
          <br />
          <button type="submit" className={css.buttonLogin}>Log In</button>
        </form>
      </div>
    );
    
};
export default LoginForm;