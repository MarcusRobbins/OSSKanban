import { useState } from 'react';

export function Counter() {
  const [n, setN] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setN((x) => x + 1);
    setIsClicked(true);
  }
  
  return (
    <button 
      onClick={handleClick} 
      style={{ backgroundColor: isClicked ? 'red' : 'initial' }}
    >
      Clicked {n} {n === 1 ? 'time' : 'times'}
    </button>
  );
}
