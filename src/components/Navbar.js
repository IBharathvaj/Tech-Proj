// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/mentorship">Mentors</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
