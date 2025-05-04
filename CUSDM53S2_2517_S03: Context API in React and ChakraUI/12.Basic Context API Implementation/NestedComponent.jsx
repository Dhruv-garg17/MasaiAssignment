import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function NestedComponent() {
  const { theme } = useContext(ThemeContext);

  const nestedStyle = {
    backgroundColor: theme === 'light' ? '#e0e0e0' : '#777',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '10px',
    marginTop: '10px',
  };

  return (
    <div style={nestedStyle}>
      <h3>Nested Component</h3>
      <p>Current theme: {theme}</p>
    </div>
  );
}

export default NestedComponent;
