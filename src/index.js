import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css'; // Optional: Add your global styles here
import App from './App'; // Import your App component
import { BrowserRouter } from 'react-router-dom'; // Correct import

// The main entry point where the React app gets rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter> {/* Use BrowserRouter instead of Router */}
    <App />
  </BrowserRouter>
);
