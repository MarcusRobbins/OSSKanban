import { useState } from 'react';

export function Counter() {
  const [n, setN] = useState(0);
  return (
    <button 
      onClick={() => setN((x) => x + 1)}
      style={{ backgroundColor: 'blue', color: 'white' }}
    >
      Clicked {n} {n === 1 ? 'time' : 'times'}
    </button>
  );
}
