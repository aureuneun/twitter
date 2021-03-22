import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Auth } from '../pages/auth';

const commonRoutes = [{ path: '/', component: <Auth /> }];

export const LoggedOutRouter = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <div
          style={{
            maxWidth: 890,
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {commonRoutes.map((route) => (
            <Route exact key={route.path} path={route.path}>
              {route.component}
            </Route>
          ))}
        </div>
      </Switch>
    </Router>
  );
};
