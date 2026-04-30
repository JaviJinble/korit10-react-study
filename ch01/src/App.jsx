import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
    const [name, setName ] = [ 10, (n) => {} ];
    // "구조분해" 라 한다. 비구조할당(구조분해) 구조분해는 객체도 가능하다.


    // const numberState = useState(10);
    // const number = numberState[0];
    // const setNumber = numberState[1];
    const [number, setNumber] = useState(10);
    

    const handleOnClick = () => {
        setNumber(number + 10);

    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={handleOnClick}>증가</button>
        </div>
    )
}

export default App
