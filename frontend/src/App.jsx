import React from 'react';
import { Routes, Route } from 'react-router-dom';

// imported components
import Login from './pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
