import { use } from "react";
import { useState } from "react";


function Hello() {
    console.log("함수 재호출");

    const text = "Hello";
    const [helloText, setText] = useState("");

    const handleOnClickHello = () => {
        console.log("클릭")
        setText(text);
    }

    const toggleClickHello = () => {
        setText(prev => prev ? "" : "Hello");
    };

    return (
        <div>
            <button onClick={handleOnClickHello}>클릭</button>
            <button onClick={toggleClickHello}>토글</button>
            <button onClick={() => { setText("") }}>클릭</button>
            <h1>{helloText}</h1>
        </div>
    )
}

export function Hi() {
    const [num, numberState] = useState(0);

    const headleOnClickAddNumber = () => {
        numberState(num => num + 1);
    }

    const headleOnClickMinusNumbe = () => {
        numberState(num => num - 1);
    }

    return (
        <div>
            <button onClick={headleOnClickAddNumber}>1증가</button>
            <button onClick={headleOnClickMinusNumbe}>1감소</button>
            <button onClick={() => { numberState(0) }}>초기화</button>
            <h1>{num}</h1>
            <h1>Hi</h1>
        </div>
    )
}

export function Bye() {
    return (
        <h1>Bye</h1>
    )
}



export default Hello;
