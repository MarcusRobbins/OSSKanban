import { useState } from 'react';

export function Counter() {
  const [n, setN] = useState(0);
  return (
    <button 
      onClick={() => setN((x) => x + 1)}
      style={{ backgroundColor: 'purple', color: 'white', borderColor: 'blue', borderStyle: 'solid' }}
    >
      Clicked {n} {n === 1 ? 'time' : 'times'}
    </button>
  );
}
