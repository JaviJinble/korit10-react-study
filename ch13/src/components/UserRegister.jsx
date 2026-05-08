import { useRef } from "react";
import { useInput } from "../hooks/inputs";
// useInput 커스텀 Hook 사용

// UserRegister 역할 사용자 등록 추가 기능
function UserRegister({users, setUsers}) {

    // 핵심 구조
    // 의미: 입력 초기값
const initUser = {
        id: "",
        username: "",
        email: "",
    };

    // useInput 커스텀 Hook 사용
    // 핵심 개념: 입력 관련 기능들을 재사용하기 위해 따로 분리한 것.
    // 입력 관리 로직 분리
    const { inputValues, setInputValues, isValid, handleInputOnChange } = useInput({initValue: initUser});
    const currentId = useRef(0);
    // useRef 사용
    // 왜 useState를 안 쓰는가.
    // id는 화면을 다시 그릴 필요 없음. 그래서 값만 저장 용도로 useRef 사용.
    

    const handleRegisterOnClick = () => {
        // id 증가
        currentId.current += 1;

        // 사용자 추가
        const newUser = {
            ...inputValues,
            id: currentId.current
        }

        // 중요한 React 개념 원본 수정X 새 배열 생성O

        setUsers([...users, newUser]); // users 추가
        setInputValues(initUser); // 등록 후 입력창 초기화

    };


    // 중요한 React 개념 원본 수정X 새 배열 생성O

    return(
        <>
            <div>

                <div>
                    <input type="text" name='username' value={inputValues.username} onChange={handleInputOnChange} placeholder='계정명' />
                    <input type="text" name='email' value={inputValues.email} onChange={handleInputOnChange} placeholder='이메일' />
                    <button disabled={!isValid} onClick={handleRegisterOnClick}>등록</button>
                </div>
            </div>

        </>
    )
}

export default UserRegister;