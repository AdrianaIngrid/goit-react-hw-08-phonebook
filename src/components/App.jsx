import React from 'react';
import { Contacts } from './Contacts';
import  LoginPage  from '../components/Pages/LoginPage/LoginPage';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import RegisterPage from '../components/Pages/RegisterPage/RegisterPage';




function App() {

  return (
    <div>
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
                component={<LoginPage />}
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
