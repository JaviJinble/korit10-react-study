import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'


function App() {
    const [text, setText] = useState(""); // 래더링을 위해 상태변화를 줘야한다. 상태정의

    const [ usernameText, setUsernameText ] = useState("");
    const [ passwordText, setPasswordText ] = useState("");
    
    console.log(text);

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    return <>

        <input type="text" onChange={handleOnChange} value={text} />
        <h1>출력: {text}</h1>

        <InputGroup usernameText={usernameText} passwordText={passwordText} setUsernameText={setUsernameText} setPasswordText={setPasswordText} />
        <OutputGroup usernameText={usernameText} passwordText={passwordText}/>
    </>
}

function OutputGroup({ usernameText, passwordText}) {

    return <div>
        <h1>사용자이름: {usernameText}</h1>
        <h1>비밀번호: {passwordText}</h1>
    </div>
}

function InputGroup({ usernameText, passwordText, setUsernameText, setPasswordText}) {
    console.log("InputGroup 호출");

    return <div>
        <LabelInput title={'사용자이름'} id={'username'} type={'text'} setText={setUsernameText}></LabelInput>
        <LabelInput title={'비밀번호'} id={'password'} type={'password'} setText={setPasswordText}></LabelInput>
    </div>
}

function LabelInput({ title, id, type, setText}) {
    console.log("LabelInput 호출");

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    return <div>
        <label htmlFor={id}>{title}</label>
        <input type={type} id = {id} onChange={handleOnChange} value={value}/>
    </div>
}

createRoot(document.getElementById('root')).render(
    <>
        <App />
    </>
)

