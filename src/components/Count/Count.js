"use client"
import React, { useState } from 'react';
const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter:{count} </h2>
      <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Increase +</button>
      <button className='btn btn-primary' onClick={() => setCount(count - 1)}>Decrease -</button>
    </div>
  );
};

export default Count;