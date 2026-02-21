import React, { useState } from 'react';
import './Counter.css'; // External CSS for better organization

function App() {
  const [number, setNumber] = useState(0);

  const increment = () => setNumber(prev => prev + 1);
  const decrement = () => setNumber(prev => prev - 1);
  const reset = () => setNumber(0);

  // Dynamic color based on count value
  const getCountColor = () => {
    if (number > 0) return '#4ade80'; // Green for positive
    if (number < 0) return '#f87171'; // Red for negative
    return '#64748b'; // Gray for zero
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">Button Click Counter</h1>
      
      <div 
        className="counter-display" 
        style={{ color: getCountColor() }}
      >
        {number}
      </div>
      
      <div className="btn-container">
        <button 
          className="control-btn increment" 
          onClick={increment}
          aria-label="Increment counter"
        >
          + Add
        </button>
        
        <button 
          className="control-btn decrement" 
          onClick={decrement}
          aria-label="Decrement counter"
        >
          - Subtract
        </button>
      </div>
      
      <button 
        className="reset-btn" 
        onClick={reset}
        aria-label="Reset counter"
      >
        Reset
      </button>
    </div>
  );
}

export default App;   