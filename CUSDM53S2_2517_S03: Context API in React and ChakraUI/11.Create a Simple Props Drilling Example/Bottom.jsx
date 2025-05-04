import React from 'react';
import BottomMainRight from './BottomMainRight';

function Bottom({ userName }) {
  return (
    <div style={{ border: '1px solid blue', padding: '10px' }}>
      <h3>Bottom Component</h3>
      <BottomMainRight userName={userName} />
    </div>
  );
}

export default Bottom;
