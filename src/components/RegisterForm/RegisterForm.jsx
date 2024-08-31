import React from "react";
import { register } from "../../Redux/Auth/operations";
import { useDispatch } from "react-redux";

function RegisterForm() {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
    return (
      <form autoComplete="off" onSubmit= {handleSubmit}>
        <label>
          Username
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Pasword
          <input type="password" name="password" />
        </label>
       <button type="submit">Register</button>
      </form>
    );

};
export default RegisterForm;
