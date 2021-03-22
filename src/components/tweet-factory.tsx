import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { authService, dbService, storageService } from '../firebase';

export const TweetFactory = () => {
  const [tweet, setTweet] = useState('');
  const [attachment, setAttachment] = useState('');

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
    <form onSubmit={onSubmit} className="factoryForm">
      <div className="factoryInput__container">
        <input
          className="factoryInput__input"
          type="text"
          placeholder="What is on your mind?"
          value={tweet}
          onChange={onChange}
          maxLength={100}
          required
        />
        <input type="submit" value="&rarr;" className="factoryInput__arrow" />
      </div>
      <label className="factoryInput__label">
        <span>Add photos</span>
        <FontAwesomeIcon icon={faPlus} />
        <input
          type="file"
          accept="image/*"
          onChange={onFileChange}
          id="attach-file"
          style={{
            display: 'none',
          }}
        />
      </label>
      {attachment && (
        <div className="factoryForm__attachment">
          <img
            src={attachment}
            alt="attachment"
            style={{
              backgroundImage: attachment,
            }}
          />
          <div className="factoryForm__clear" onClick={() => setAttachment('')}>
            <span>Remove</span>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      )}
    </form>
  );
};
