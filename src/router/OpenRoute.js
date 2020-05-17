
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';

import { Auth } from './../services/Auth.service';

const OpenRoute = ({ component: Component, authToken, ...rest }) => {
  return (
    <Route
      {...rest}
      render={
        (props) => {
          const redirect = <Redirect to={
            {
              pathname: "/",
              state: {
                from: props.location
              }
            }
          } />

          const decodedToken = jwt.decode(authToken);
          const dateNow = new Date().getTime() / 1000;

          if (decodedToken.exp >= dateNow)
            return redirect;

          return <Component {...props} />
        }
      }
    />
  );
}

const mapStateToProps = ({ authToken }) => ({ authToken });

export default connect(mapStateToProps, null)(OpenRoute);