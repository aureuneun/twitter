import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { authService, dbService, storageService } from '../firebase';

interface ITweetProps {
  id: string;
  text?: string;
  createdAt?: number;
  creatorId?: string;
  attachmentUrl?: string;
}

export const Tweet: React.FC<ITweetProps> = ({
  id,
  text,
  creatorId,
  attachmentUrl,
}) => {
  const [editing, setEditing] = useState({ isEditing: false, tweet: text });
  const toggleEditing = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    setEditing((prev) => ({ tweet: text, isEditing: !prev.isEditing }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dbService.doc(`tweets/${id}`).update({ text: editing.tweet });
    setEditing({ ...editing, isEditing: false });
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setEditing({ ...editing, tweet: value });
  };
  return (
    <div>
      {editing.isEditing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your tweet"
              value={editing.tweet}
              onChange={onChange}
              maxLength={100}
              required
            />
            <input type="submit" value="Update tweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{text}</h4>
          {attachmentUrl && (
            <img
              src={attachmentUrl}
              alt="attachment"
              width="50px"
              height="50px"
            />
          )}
          {creatorId === authService.currentUser?.uid && (
            <>
              <button
                onClick={async () => {
                  const ok = window.confirm(
                    'Are you sure you want to delete this tweet?'
                  );
                  if (ok) {
                    await dbService.doc(`tweets/${id}`).delete();
                    if (attachmentUrl) {
                      await storageService.refFromURL(attachmentUrl).delete();
                    }
                  }
                }}
              >
                Delete tweet
              </button>
              <button onClick={toggleEditing}>Edit tweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};
