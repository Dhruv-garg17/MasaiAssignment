import React from 'react';
import Bottom from './Bottom';

function Main({ userName }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px' }}>
      <h2>Main Component</h2>
      <Bottom userName={userName} />
    </div>
  );
}

export default Main;
