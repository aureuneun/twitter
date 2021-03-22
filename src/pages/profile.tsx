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
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Display name"
          value={displayName}
          onChange={onChange}
        />
        <input type="submit" value="Update profile" />
      </form>
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
