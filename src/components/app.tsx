import React, { useEffect, useState } from 'react';
import { authService } from '../firebase';
import { LoggedInRouter } from '../routers/logged-in-router';
import { LoggedOutRouter } from '../routers/logged-out-router';

export const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        isLoggedIn ? (
          <LoggedInRouter />
        ) : (
          <LoggedOutRouter />
        )
      ) : (
        <span>Initialization...</span>
      )}
      <footer>&copy; {new Date().getFullYear()} Twitter</footer>
    </>
  );
};
