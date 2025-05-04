import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import NestedComponent from './NestedComponent';

function Main() {
  const { theme } = useContext(ThemeContext);

  const mainStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#555',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '15px',
    marginTop: '20px',
  };

  return (
    <div style={mainStyle}>
      <h2>Main Component</h2>
      <NestedComponent />
    </div>
  );
}

export default Main;
