import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import Main from './Main';

function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '20px',
  };

  return (
    <div style={appStyle}>
      <h1>Context API Theme Demo</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Main />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
