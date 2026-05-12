import { Route, Routes } from "react-router";
import Join from "../Pages/Join/Join";
import Login from "../Pages/Login/Login";

function AuthRoutes() {

    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/join' element={<Join />} />
                <Route path='*' element={<>404</>} />
            </Routes>
        </>
    )
}

export default AuthRoutes;