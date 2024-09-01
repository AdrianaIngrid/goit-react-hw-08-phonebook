import React from "react";
import { register } from "../../Redux/Auth/operations";
import { useDispatch } from "react-redux";
import css from './RegisterForm.module.css';

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
    <div className={css.registerForm}>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={css.glassRegisterForm}
      >
        <div className={css.registerInput}>
          <label>
            Username
            <br />
            <input type="text" name="name" className={css.inputRegister} />
          </label>
          <br />
          <label>
            Email
            <br />
            <input type="email" name="email" className={css.inputRegister} />
          </label>
          <br />
          <label>
            Pasword
            <br />
            <input
              type="password"
              name="password"
              className={css.inputRegister}
            />
          </label>
        </div>
        <button className={css.buttonRegister} type="submit">
          Register
        </button>
      </form>
    </div>
  );

};
export default RegisterForm;
