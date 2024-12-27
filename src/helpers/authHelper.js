// src/components/ProtectedRoute.js

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

/**
 * ProtectedRoute Component using React-Redux Hooks
 *
 * Protects routes based on authentication status and user roles.
 *
 * Props:
 * - component: The component to render if access is granted.
 * - roles: An array of roles allowed to access the route.
 * - ...rest: Any additional props.
 */
const ProtectedRoute = ({ component: Component, ...rest }) => {
  // const auth = useSelector((state) => state.authUser); // Adjust based on your Redux state structure
//  console.log({auth});
 
  // const { token, currentUser, isAuthGuardActive } = auth;
const token = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={(props) => {
        // If authentication guard is disabled, allow access
        // if (!token) {
        //   return <Component {...props} />;
        // }

        // If user is not authenticated, redirect to login
        if (!token) {
          return (
            <Redirect
              to={{
                pathname: '/user/login',
                state: { from: props.location },
              }}
            />
          );
        }

        // If roles are specified, check if the user has the required role
        // if (roles.length > 0) {
        //   if (!currentUser || !roles.includes(currentUser.role)) {
        //     return (
        //       <Redirect
        //         to={{
        //           pathname: '/unauthorized',
        //           state: { from: props.location },
        //         }}
        //       />
        //     );
        //   }
        // }

        // User is authenticated and has required role, render the component
        return <Component {...props} />;
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string),
};

ProtectedRoute.defaultProps = {
  roles: [],
};

export default ProtectedRoute;
