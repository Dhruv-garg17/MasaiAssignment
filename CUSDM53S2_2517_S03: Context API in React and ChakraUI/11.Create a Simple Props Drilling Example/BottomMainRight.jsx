import React from 'react';

function BottomMainRight({ userName }) {
  return (
    <div style={{ border: '1px solid green', padding: '10px' }}>
      <h4>BottomMainRight Component</h4>
      <p>Hello, {userName ? userName : 'Guest'}!</p>
    </div>
  );
}

export default BottomMainRight;
