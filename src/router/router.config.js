import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import OpenRoute from './OpenRoute';
import ProtectedRoute from './ProtectedRoute';
import { LoginComponent, RegisterComponent, SalonsComponent } from '../components';
import rootReducer from './../redux';

const store = createStore(rootReducer);

const Routing = (
  <Provider {...{store}}>
    <BrowserRouter>
      <Switch>
        <OpenRoute path="/login" exact component={LoginComponent} />
        <OpenRoute path="/register" component={RegisterComponent} />

        <ProtectedRoute path="/" component={SalonsComponent} />
      </Switch>
    </BrowserRouter>
  </Provider>
);
export default Routing;