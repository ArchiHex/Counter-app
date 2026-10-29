import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [newValue, setNewValue] = useState(1);

  return (
    <div className="counter-card">
      <h1>Counter</h1>
      <p className="counter-value">Current value: {count}</p>

      <div className="counter-controls">
        <button className="primary-button" onClick={() => setCount(count =>count + 1)}>+1</button>
        <button className="secondary-button" onClick={() => setCount(count => Math.max(0, count - 1))}>-1</button>
        <button className="reset-button" onClick={() => setCount(0)}>Reset</button>
      </div>

      <div className="custom-controls">
        <input
          type="number"
          className="number-input"
          placeholder="Enter Number"
          value={newValue}
          onChange={(e) => setNewValue(Number(e.target.value))}
        />

        <div className="inline-buttons">
          <button className="primary-button" onClick={() => setCount(count => count + newValue)}>Add</button>
          <button className="secondary-button" onClick={() => setCount(count => Math.max(0, count - newValue))}>Subtract</button>
        </div>
      </div>
    </div>
  );
}