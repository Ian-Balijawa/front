import React from 'react'
import SignUp from '../containers/SignUp'
import SignIn from '../containers/SignIn'
import ForgotPassword from '../containers/ForgotPassword'
import Dashboard from '../containers/Dashboard'
import PasswordReset from '../containers/PasswordReset'
import {Route, Routes} from 'react-router-dom'
import Inventory from '../pages/Inventory'
import Sales from '../pages/Sales'
import Reports from '../pages/Reports'
import Settings from '../pages/Settings'

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/register" element={<SignUp />} />
            <Route path="/reset/password" element={<ForgotPassword />} />
            <Route path="/:token/reset/password" element={<PasswordReset />} />
            <Route path="/dashboard/index" element={<Dashboard />} />
            <Route path="/dashboard/home" element={<Dashboard />} />
            <Route path="/dashboard/inventory" element={<Inventory />} />
            <Route path="/dashboard/sales" element={<Sales />} />
            <Route path="/dashboard/reports" element={<Reports />} />
            <Route path="/dashboard/settings" element={<Settings />} />
        </Routes>
    )
}
export default Navigation
