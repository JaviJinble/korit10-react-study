import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);

// currentId를 증가시키고 useEffect에서 리스트를 추가하는 구조가
// 그냥 버튼에서 바로 추가하는 것보다 어떤 장점이 있는지 궁금합니다

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
