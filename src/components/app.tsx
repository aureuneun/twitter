import React, { useState } from 'react';
import { LoggedInRouter } from '../routers/logged-in-router';
import { LoggedOutRouter } from '../routers/logged-out-router';

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />;
};
