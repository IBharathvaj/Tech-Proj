import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import EditProfilePage from './pages/EditProfilePage';
import MentorshipPage from './pages/MentorshipPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
            <Route path="/mentorship" element={<MentorshipPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;