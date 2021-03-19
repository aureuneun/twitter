import React from 'react';
import { useHistory } from 'react-router';
import { authService } from '../firebase';

export const Profile = () => {
  const history = useHistory();
  return (
    <>
      <button
        onClick={() => {
          authService.signOut();
          history.push('/');
        }}
      >
        Sign out
      </button>
    </>
  );
};
