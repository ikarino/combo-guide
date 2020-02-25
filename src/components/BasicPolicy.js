import React from 'react';

const BasicPolicy = ({ children }) => (
  <div style={{ 
    padding: '0.5em 1em', 
    margin: '2em 0',
    color: '#232323',
    background: '#fff8e8',
    borderLeft: 'solid 10px #ffc06e',
  }}>
    { children}
  </div>
);

export default BasicPolicy;