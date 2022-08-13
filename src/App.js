import './App.css'
import {Routes, Route} from 'react-router-dom'
import Login from './content/Auth/Login'
import Register from './content/Auth/Register'
import ForgotPassword from './content/Auth/ForgotPassword'
import ResetPassword from './content/Auth/ResetPassword'
import Dashboard from './content/Dashboard'
import Settings from './content/Settings'
import Inventory from './content/Inventory'
import Reports from './content/Reports'
import EmployeeSetup from './content/Settings/EmployeeSetup'
import EmployeeRole from './content/Settings/EmployeeRole'
import NewEmployee from './content/Settings/EmployeeSetup/NewEmployee'
import UpdateEmployee from './content/Settings/EmployeeSetup/UpdateEmployee'
import OutletSetup from './content/Settings/OutletSetup'

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
                <Route path="outlet-setup" element={<OutletSetup />} />
                <Route path="new-employee" element={<NewEmployee />} />
                <Route path="update-employee" element={<UpdateEmployee />} />
                <Route path="employee-role" element={<EmployeeRole />} />
                <Route path="inventory" element={<Inventory />} />
                <Route path="reports" element={<Reports />} />
            </Routes>
        </div>
    )
}

export default App
