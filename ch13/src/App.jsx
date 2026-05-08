import { useState } from 'react'
import UserListTable from './components/UserListTable';
import UserRegister from './components/UserRegister';

function App() {
    // 전체 데이터 관리
    // users 상태 저장
    // 컴포넌트 연결

    const [users, setUsers] = useState([]); // 핵심 코드 
    // 의미 users -> 사용자 목록 데이터
    //      setUsers -> 목록 수정 함수


    // 부모(App)가 상태를 가지고 자식(UserRegister, UserListTable)에게 전달
    return (
        <>
            <div>
                <UserRegister users={users} setUsers={setUsers} />
                <UserListTable users={users} setUsers={setUsers} />
            </div>

        </>
    )
}

export default App
