import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0) {
      console.log("현재 카운트:", count);
    }
  }, [count]);

  return (
    <>
      <h1>문제 2-1</h1>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
}

export default App;
