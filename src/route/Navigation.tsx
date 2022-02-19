import React from 'react'
import SignUp from '../containers/SignUp'
import SignIn from '../containers/SignIn'
import ForgotPassword from '../containers/ForgotPassword'
import Dashboard from '../containers/Dashboard'
import PasswordReset from '../containers/PasswordReset'
import {Route, Routes} from 'react-router-dom'

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/register" element={<SignUp />} />
            <Route path="/reset/password" element={<ForgotPassword />} />
            <Route path="/:token/reset/password" element={<PasswordReset />} />
            <Route path="/dashbord/index" element={<Dashboard />} />
        </Routes>
    )
}
export default Navigation
