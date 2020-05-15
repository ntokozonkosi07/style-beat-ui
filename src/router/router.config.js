import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import OpenRoute from './OpenRoute';
import ProtectedRoute from './ProtectedRoute';
import { LoginComponent, RegisterComponent, SalonsComponent } from '../components';

const Routing = (
    <BrowserRouter>
      <Switch>
        <OpenRoute path="/login" exact component={LoginComponent} />
        <OpenRoute path="/register" component={RegisterComponent} />

        <ProtectedRoute path="/" component={SalonsComponent} />
      </Switch>
    </BrowserRouter>
);
export default Routing;