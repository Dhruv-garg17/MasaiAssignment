import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function Navbar() {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <nav style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
      <h2>My App</h2>
      <button onClick={toggleAuth}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </nav>
  );
}

export default Navbar;
