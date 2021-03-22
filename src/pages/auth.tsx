import React, { MouseEvent } from 'react';
import { AuthForm } from '../components/auth-form';
import firebase, { authService } from '../firebase';

export const Auth = () => {
  const onClick = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    const {
      currentTarget: { name },
    } = e;
    if (name === 'google') {
      const provider = new firebase.auth.GoogleAuthProvider();
      await authService.signInWithPopup(provider);
    } else if (name === 'github') {
      const provider = new firebase.auth.GithubAuthProvider();
      await authService.signInWithPopup(provider);
    }
  };
  return (
    <div>
      <AuthForm />
      <div>
        <button name="google" onClick={onClick}>
          Continue with Google
        </button>
        <button name="github" onClick={onClick}>
          Continue with Github
        </button>
      </div>
    </div>
  );
};
