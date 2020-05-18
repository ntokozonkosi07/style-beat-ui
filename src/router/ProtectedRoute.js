import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';

const ProtectedRoute = ({ component: Component, authToken, ...rest }) => {
  return (
    <Route
      {...rest}
      render={
        (props) => {
          const redirect = <Redirect to={
            {
              pathname: "/login",
              state: {
                from: props.location
              }
            }
          } />;
          if (authToken) {
            const decodedToken = jwt.decode(authToken, { complete: true });
            
            const dateNow = new Date().getTime() / 1000;

            if(decodedToken.payload.exp < dateNow)
              return redirect;

            return <Component {...props} />
          } else {
            return redirect;
          }
        }
      } />
  );
}

const mapStateToProps = ({ authToken }) => ({ authToken });

export default connect(mapStateToProps, null)(ProtectedRoute);