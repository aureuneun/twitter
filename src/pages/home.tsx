import React, { useEffect, useState } from 'react';
import { Tweet } from '../components/tweet';
import { TweetFactory } from '../components/tweet-factory';
import { dbService } from '../firebase';

interface ITweets {
  id: string;
  text?: string;
  createdAt?: number;
  creatorId?: string;
  attachmentUrl?: string;
}

export const Home = () => {
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
  return (
    <div className="container">
      <TweetFactory />
      <div style={{ marginTop: 30 }}>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </div>
  );
};
