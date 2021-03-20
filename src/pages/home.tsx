import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Tweet } from '../components/tweet';
import { authService, dbService } from '../firebase';

interface ITweets {
  id: string;
  text?: string;
  createdAt?: number;
  creatorId?: string;
}

export const Home = () => {
  const [tweet, setTweet] = useState('');
  const [tweets, setTweets] = useState<ITweets[]>([]);
  useEffect(() => {
    const unsubscribe = dbService
      .collection('tweets')
      .orderBy('createdAt')
      .onSnapshot((snapshot) => {
        const tweets = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTweets(tweets);
      });
    return () => unsubscribe();
  }, []);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dbService.collection('tweets').add({
      text: tweet,
      createdAt: Date.now(),
      creatorId: authService.currentUser?.uid,
    });
    setTweet('');
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setTweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="What is on your mind?"
          value={tweet}
          onChange={onChange}
          maxLength={100}
          required
        />
        <input type="submit" value="Tweet" />
      </form>
      <div>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </div>
  );
};
