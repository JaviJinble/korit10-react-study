import { useState } from 'react'


function InputBox({type, id, value, name, placeholder, onChange}) {
    return (
        <div>
            <input type={type} id={id} name={name} value={value} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}

function App() {
    const initUser = {
        username: "",
        password: "",
        name: "",
        email: "",
    }

    const [ user, setUser ] = useState(initUser);

    const handleInputOnChange = (e) => {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value,
        });

    } 

    const handleSudmitOnClick = () => {
        console.log(user);
        setUser(initUser);
    }

    return (
        <>
            <div>
            <label htmlFor="username">아이디</label>
            <InputBox type="text" id="username" name="username" value={user.username} placeholder="아이디" onChange={handleInputOnChange} />
            </div>
            <div>
            <label htmlFor="password">비밀번호</label>
            <InputBox type="text" id="password" value={user.password} name="password" placeholder="비밀번호" onChange={handleInputOnChange} />
            </div>
            <div>
            <label htmlFor="name">사용자이름</label>
            <InputBox type="text" id="name" name="name" value={user.name} placeholder="사용자이름" onChange={handleInputOnChange} />
            </div>
            <div>
            <label htmlFor="email">이메일</label>
            <InputBox type="text" id="email" name="email" value={user.email} placeholder="이메일" onChange={handleInputOnChange} />
            </div>
            <button onClick={ handleSudmitOnClick }>회원가입</button>
        </>
    )
}

export default App
