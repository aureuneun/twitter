import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Tweet } from '../components/tweet';
import { authService, dbService, storageService } from '../firebase';

interface ITweets {
  id: string;
  text?: string;
  createdAt?: number;
  creatorId?: string;
  attachmentUrl?: string;
}

export const Home = () => {
  const [tweet, setTweet] = useState('');
  const [tweets, setTweets] = useState<ITweets[]>([]);
  const [attachment, setAttachment] = useState('');
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
    let attachmentUrl = '';
    if (attachment !== '') {
      const attachmentRef = storageService
        .ref()
        .child(`${authService.currentUser?.uid}/${uuidv4()}`);
      const attachmentRes = await attachmentRef.putString(
        attachment,
        'data_url'
      );
      attachmentUrl = await attachmentRes.ref.getDownloadURL();
    }
    await dbService.collection('tweets').add({
      text: tweet,
      createdAt: Date.now(),
      creatorId: authService.currentUser?.uid,
      attachmentUrl,
    });
    setTweet('');
    setAttachment('');
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setTweet(value);
  };
  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { files },
    } = e;
    if (files) {
      const theFile = files[0];
      const reader = new FileReader();
      if (theFile) {
        reader.readAsDataURL(theFile);
      } else {
        setAttachment('');
      }
      reader.onloadend = () => {
        setAttachment(String(reader.result));
      };
    }
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
        <input type="file" accept="image/*" onChange={onFileChange} id="file" />
        {attachment && (
          <div>
            <img src={attachment} alt="attachment" width="50px" height="50px" />
            <button onClick={() => setAttachment('')}>Cancel</button>
          </div>
        )}
      </form>
      <div>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </div>
  );
};
