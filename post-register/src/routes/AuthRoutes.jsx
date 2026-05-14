import { Route, Routes } from "react-router";
import Signup from "../pages/Signup/Signup.jsx";
import Signin from "../pages/Signin/Signin.jsx";
import AuthLayout from "../components/AuthLayout/AuthLayout";

function AuthRoutes() {

    return (
        <AuthLayout>
            <Routes>
                <Route path="/signup" element={<Signup /> }/>
                <Route path="/signin" element={<Signin />}/>
            </Routes>
        </AuthLayout>
    )
}

export default AuthRoutes;