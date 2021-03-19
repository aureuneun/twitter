import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Auth } from '../pages/auth';

const commonRoutes = [{ path: '/', component: <Auth /> }];

export const LoggedOutRouter = () => {
  return (
    <Router>
      <Switch>
        {commonRoutes.map((route) => (
          <Route exact key={route.path} path={route.path}>
            {route.component}
          </Route>
        ))}
      </Switch>
    </Router>
  );
};
