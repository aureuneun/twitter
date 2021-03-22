import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
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
        <div
          style={{
            maxWidth: 890,
            width: '100%',
            margin: '0 auto',
            marginTop: 80,
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
