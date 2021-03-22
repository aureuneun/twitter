import {
  faGithub,
  faGoogle,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    <div className="authContainer">
      <FontAwesomeIcon
        icon={faTwitter}
        color={'#04AAFF'}
        size="3x"
        style={{ marginBottom: 30 }}
      />
      <AuthForm />
      <div className="authBtns">
        <button name="google" onClick={onClick} className="authBtn">
          Continue with Google <FontAwesomeIcon icon={faGoogle} />
        </button>
        <button name="github" onClick={onClick} className="authBtn">
          Continue with Github <FontAwesomeIcon icon={faGithub} />
        </button>
      </div>
    </div>
  );
};
