import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={
        (props) => {
          if (props.getAuthToken) {
            return <Component {...props} />
          } else {
            return <Redirect to={
              {
                pathname: "/login",
                state: {
                  from: props.location
                }
              }
            } />
          }
        }
      } />
  );
}

const mapStateToProps = ({ getAuthToken }) => ({ getAuthToken });

export default connect(mapStateToProps, null)(ProtectedRoute);