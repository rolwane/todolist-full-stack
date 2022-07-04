/* eslint-disable react/jsx-no-constructed-context-values */

import React, { useState } from 'react';
import propTypes from 'prop-types';

import AppContext from './AppContext';

function Provider({ children }) {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userId, setUserId] = useState('');

  const value = {
    userName,
    userEmail,
    userId,
    setUserName,
    setUserEmail,
    setUserId,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.string,
}.isRequired;
