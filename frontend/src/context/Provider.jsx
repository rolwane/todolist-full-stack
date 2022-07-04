/* eslint-disable react/jsx-no-constructed-context-values */

import React from 'react';
import propTypes from 'prop-types';

import AppContext from './AppContext';

function Provider({ children }) {
  return (
    <AppContext.Provider value={{ name: 'Rolwane' }}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.string,
}.isRequired;
