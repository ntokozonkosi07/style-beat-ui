import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import OpenRoute from './OpenRoute';
import { LoginComponent, RegisterComponent, SalonsComponent } from '../components';

const Routing = (
    <BrowserRouter>
      <Switch>
        <OpenRoute path="/" exact component={LoginComponent} />
        <OpenRoute path="/register" component={RegisterComponent} />

        <OpenRoute path="/salons" component={SalonsComponent} />
      </Switch>
    </BrowserRouter>
);
export default Routing;