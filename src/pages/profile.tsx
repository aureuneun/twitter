import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { authService } from '../firebase';

export const Profile = () => {
  const history = useHistory();
  const [displayName, setDisplayName] = useState(
    String(authService.currentUser?.displayName)
  );
  /*   const getMyTweets = async () => {
    const tweets = await dbService
      .collection('tweets')
      .where('creatorId', '==', authService.currentUser?.uid)
      .orderBy('createdAt')
      .get();
    const myTweets = tweets.docs.map((doc) => doc.data());
  };
  useEffect(() => {
    getMyTweets();
  }, []); */
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (authService.currentUser?.displayName !== displayName) {
      await authService.currentUser?.updateProfile({ displayName });
    }
    history.push('/');
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setDisplayName(value);
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <input
          type="text"
          placeholder="Display name"
          value={displayName}
          onChange={onChange}
          autoFocus
          className="formInput"
        />
        <input
          type="submit"
          value="Update profile"
          className="formBtn"
          style={{
            marginTop: 10,
          }}
        />
      </form>
      <span
        className="formBtn cancelBtn logOut"
        onClick={() => {
          authService.signOut();
          history.push('/');
        }}
      >
        Sign out
      </span>
    </div>
  );
};
