import { useState } from 'react'

function TextInput() {
    const [text, setText] = useState('');
    const [output, setOutput] = useState('');
    const [text2, setText2] = useState('');
    const [output2, setOutput2] = useState('');


    const onChange = (e) => {
        setText(e.target.value);
    }

    const onChange2 = (e) => {
        setText2(e.target.value);
    }

    const handleonClick = (e) => {
        setOutput(text);
        setOutput2(text2)
    }



    return (
    <>
        <input onChange={onChange} value={text} type='text' />
        <input onChange={onChange2} value={text2} type='text' />
        <button onClick={handleonClick}>출력</button>
        <h1>내용: {output}</h1>
        <h1>내용2: {output2}</h1>
    </>
    )
}


function App() {


    return (
    <>
        <TextInput />
    </>
    )
    
}

export default App
