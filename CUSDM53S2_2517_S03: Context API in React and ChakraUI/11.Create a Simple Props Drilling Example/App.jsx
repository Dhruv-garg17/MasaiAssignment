import React, { useState } from 'react';
import Main from './Main';

function App() {
  const [userName, setUserName] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <h1>Props Drilling Demo</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        style={{ padding: '8px', marginBottom: '20px' }}
      />
      <Main userName={userName} />
    </div>
  );
}

export default App;
