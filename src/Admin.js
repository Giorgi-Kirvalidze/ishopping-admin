import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import './index.css';
import Users from './pages/Users';
const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export default Admin;
