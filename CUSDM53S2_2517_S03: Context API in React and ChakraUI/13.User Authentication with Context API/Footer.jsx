import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function Footer() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <footer style={{ padding: '20px', backgroundColor: '#f4f4f4', marginTop: '20px' }}>
      <p>{isAuthenticated ? 'Welcome, User' : 'Please log in'}</p>
    </footer>
  );
}

export default Footer;
