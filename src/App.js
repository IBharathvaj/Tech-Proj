import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import UserList from './UserList';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import EditProfilePage from './pages/EditProfilePage';
import MentorshipPage from './pages/MentorshipPage';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar with navigation links */}
        <Navbar />
        
        {/* Navigation links for testing */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>

        {/* Main content area */}
        <div className="container">
          <Routes>
            {/* Define routes for different pages */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
            <Route path="/mentorship" element={<MentorshipPage />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/users" element={<UserList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
