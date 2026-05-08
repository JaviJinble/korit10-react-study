import { useState } from "react";
import EditModal from "./EditModal";

// UserListTable 역할 사용자 목록 출력
function UserListTable({users, setUsers}) {
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ editModal, setEditModal ] = useState(<></>);
    
    const handleEditOnClick = (e) => {
        setEditModal(<EditModal isOpen={true} onClose={handleModalOnClose} users={users} setUsers={setUsers} editUserId={parseInt(e.target.value)} />)
        setModalOpen(true);
    };

    const handleDeleteOnClick = (e) => {
        const userId = parseInt(e.target.value);

        console.log(typeof userId);
        console.log(typeof users[0].id);

        // 삭제 기능 핵심
        // filter 의미: 조건에 맞는 것만 남김. -> 즉, 삭제할 id 제외
        setUsers(users.filter(user => user.id !== userId));
    };

    const handleModalOnClose = () => {
        setEditModal(<></>);
        setModalOpen(false);
    }

    const thAndTdStyle = (width = "70px") => ({
        padding: "0px 10px",
        width,
        height: "30px",
        border: "1px solid #dbdbdb",
        textAlign: "center",
    });

        // 핵심: users.map(user => ...) 
        // map 의미: 배열 반복하면서 JSX 생성
        // key를 쓰는 이유: React가 변경된 요소를 빠르게 찾기 위해 사용
    return <>
        <table style={{ boxSizing: 'border-box', border: '1px solid #dbdbdb', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    <th style={thAndTdStyle()}>ID</th>
                    <th style={thAndTdStyle("140px")}>USERNAME</th>
                    <th style={thAndTdStyle("240px")}>E-MAIL</th>
                    <th style={thAndTdStyle()}></th>
                    <th style={thAndTdStyle()}></th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => ( 
                    <tr key={user.id}>
                        <td style={thAndTdStyle()}>{user.id}</td>
                        <td style={thAndTdStyle("140px")}>{user.username}</td>
                        <td style={thAndTdStyle("240px")}>{user.email}</td>
                        <td style={thAndTdStyle()}>{<button value={user.id} onClick={handleEditOnClick}>수정</button>}</td>
                        <td style={thAndTdStyle()}>{<button value={user.id} onClick={handleDeleteOnClick}>삭제</button>}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        {modalOpen && editModal}
    </>
}

export default UserListTable;