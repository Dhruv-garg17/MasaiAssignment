// src/App.jsx
import React from 'react';
import './App.css'; 

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>My Simple Webpage</h1>
      </header>

      {/* Navigation */}
      <nav className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="content">
        <h2>Welcome to the website!</h2>
        <p>This is a simple webpage layout with a header, navigation bar, and footer.</p>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 My Simple Webpage. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
