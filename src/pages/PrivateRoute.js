import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
// import { useUserContext } from '../context/user_context';

const PrivateRoute = ({children, ...rest}) => {
  const {user} = useAuth0()
  return user ? <Routes>
      <Route {...rest}>{children}</Route>
     </Routes>
      : <Navigate to="/" />;
};

export default PrivateRoute;
 