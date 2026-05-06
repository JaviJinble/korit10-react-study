import { use, useEffect, useState } from 'react'


function App() {
    // const [ data, setData ] = useState([1,2,3,4,5,1,2,5]); 
    const [ currentId, setCurrentId ] = useState(0);
    const [ inputValue, setInputValue ] = useState("");
    const [ data, setData ] = useState([]); 

    
    const handleAddOnClick = () => { 
        // 비동기적 실행 , 동기란 순서대로 동작하는 것이다. 비동기란 작업을 뒤로 미룬다는것이다.
        // 다음 page에서 set은 실행한다. 
        setCurrentId(currentId + 1);
        // setData([...data, {id: currentId , num: inputValue}]);
    }
    
    useEffect(() => { 
        console.log("useEffect 호출")
        if (currentId !== 0) {
            setData([...data, {id: currentId , num: inputValue}]);
        }
    }, [currentId]);
    
    console.log(currentId);
    console.log(data);
    
    return (
        <>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={handleAddOnClick}>추가</button>
        <ul>
            {data.map( d => <li key={d.id}>{d.num}</li>)}
        </ul>
        </>
    )
}

export default App
