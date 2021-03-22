import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    <div className="nweet">
      {editing.isEditing ? (
        <>
          <form onSubmit={onSubmit} className="container nweetEdit">
            <input
              type="text"
              placeholder="Edit your tweet"
              value={editing.tweet}
              onChange={onChange}
              maxLength={100}
              required
              autoFocus
              className="formInput"
            />
            <input type="submit" value="Update tweet" className="formBtn" />
          </form>
          <span onClick={toggleEditing} className="formBtn cancelBtn">
            Cancel
          </span>
        </>
      ) : (
        <>
          <h4>{text}</h4>
          {attachmentUrl && <img src={attachmentUrl} alt="attachment" />}
          {creatorId === authService.currentUser?.uid && (
            <div className="nweet__actions">
              <span
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
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};
