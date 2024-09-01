import React from 'react';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../Redux/Auth/selectors';
import { useSelector } from 'react-redux';

import css from './Navigation.module.css';
import LogoutButton from 'components/LogoutButton';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <nav>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.active}` : css.link
          }
          to="/"
        >
          PhoneBook
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.active}` : css.link
          }
          to="/register"
        >
          Register
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.active}` : css.link
          }
          to="/login"
        >
          Login
        </NavLink>
        {isLoggedIn && (
          <>
            {/* <Link to="/contacts">Contacts</Link> */}
            <LogoutButton className={css.link} />
          </>
        )}
      </nav>
    </div>
  );
};
export default Navigation;
