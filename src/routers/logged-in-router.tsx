import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav } from '../components/nav';
import { Home } from '../pages/home';
import { Profile } from '../pages/profile';

const commonRoutes = [
  { path: '/', component: <Home /> },
  { path: '/profile', component: <Profile /> },
];

export const LoggedInRouter = () => {
  return (
    <Router>
      <Nav />
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
