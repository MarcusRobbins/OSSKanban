import { useState } from 'react';

export function Counter() {
  const [n, setN] = useState(0);

  function handleClick() {
    setN((x) => x + 1);
  }
  
  return (
    <button 
      onClick={handleClick} 
      style={{ backgroundColor: 'red' }}
    >
      Clicked {n} {n === 1 ? 'time' : 'times'}
    </button>
  );
}
