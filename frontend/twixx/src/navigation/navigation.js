import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../login/login';
import Signup from '../signup/signup';
import Homepage from '../homepage/homepage';
import ConnectionPage from '../connections/connections';

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/connections" element={<ConnectionPage />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
