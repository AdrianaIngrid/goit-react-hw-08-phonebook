import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/operations';
import { selectAuthToken, selectUser } from '../Redux/Auth/selectors';

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const token = useSelector(selectAuthToken);

  const handleLogout = () => {
    if (token) {
      dispatch(logOut());
    }
  };

  return (
    <div>
      <p>Welcome, {user?.name}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserMenu;
