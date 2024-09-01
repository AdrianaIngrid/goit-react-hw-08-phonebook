import React from 'react';
import { Contacts } from '../Contacts';
import LoginPage from '../Pages/LoginPage/LoginPage';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RestrictedRoute } from '../RestrictedRoute';
import { PrivateRoute } from '../PrivateRoute';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import Navigation from '../Navigation/Navigation';
import css from "./App.module.css";

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="*"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={
                  <h1 className={css.animatedGradient}>
                    Welcome to Phonebook!
                  </h1>
                }
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
