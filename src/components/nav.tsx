import React from 'react';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
        <li>
          <Link to="/" style={{ marginRight: 30 }}>
            <FontAwesomeIcon icon={faTwitter} color={'#04AAFF'} size="2x" />
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            style={{
              marginLeft: 30,
            }}
          >
            <FontAwesomeIcon icon={faUser} color={'#04AAFF'} size="2x" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
