
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Auth } from './../services/Auth.service';

const OpenRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={
        (props) => {
          try {
            return <Component {...props} />
          } catch (ex) {
            return <Redirect to={
              {
                pathname: "/",
                state: {
                  from: props.location
                }
              }
            } />
          }
        }
      }
    />
  );
}

export default OpenRoute;