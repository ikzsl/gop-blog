import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component, restricted, isLoggedIn, ...rest
}) => (isLoggedIn ? (
  <Route {...rest} render={() => (restricted ? <Component /> : <Redirect to="/" />)} />
) : (
  <Route {...rest} render={() => (restricted ? <Redirect to="/login" /> : <Component />)} />
));
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  restricted: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default PrivateRoute;
