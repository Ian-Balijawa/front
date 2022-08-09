import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Login from './content/Auth/Login'
import Register from './content/Auth/Register'
import ForgotPassword from './content/Auth/ForgotPassword'
import ResetPassword from './content/Auth/ResetPassword'
import Dashboard from './content/Dashboard'
import Settings from './content/Settings'
import Inventory from './content/Inventory'
import Reports from './content/Reports'
import EmployeeSetup from './content/Settings/EmployeeSetup/EmployeeSetup'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="reset-password" element={<ResetPassword />} />

                <Route path="/" element={<Dashboard />} />
                <Route path="settings" element={<Settings />} />
                <Route path="employee-setup" element={<EmployeeSetup />} />
                <Route path="inventory" element={<Inventory />} />
                <Route path="reports" element={<Reports />} />
            </Routes>
        </div>
    )
}

export default App
