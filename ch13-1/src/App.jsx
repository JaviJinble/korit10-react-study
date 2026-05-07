import { useState } from 'react'


function App() {
  const [ users, setUsers ] = useState([]);

  return (
    <>
      <UserRegister users={users} setUsers={setUsers} />
      <UserListTable users={users} setUsers={setUsers} />
    </>
  )
}

export default App
