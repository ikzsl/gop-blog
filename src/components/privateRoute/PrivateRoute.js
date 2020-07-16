import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  children, redirectTo, condition, ...props
}) => (condition ? <Route {...props}>{children}</Route> : <Redirect to={redirectTo} />);

PrivateRoute.defaultProps = {
  redirectTo: '/',
  children: {},
};

PrivateRoute.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object,
  condition: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string,
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;
