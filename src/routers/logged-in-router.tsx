import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/home';

const commonRoutes = [{ path: '/', component: <Home /> }];

export const LoggedInRouter = () => {
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
