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
import Suppliers from './content/Inventory/Suppliers/Suppliers'
import ViewSupplier from './content/Inventory/Suppliers/ViewSupplier'
import Orders from './content/Inventory/Orders'
import OrderList from './content/Inventory/OrderList/OrderList'
import Delivered from './content/Inventory/Delivered/Delivered'
import Recipes from './content/Recipes/Recipes'
import NewRecipe from './content/Recipes/NewRecipe'
import NewOutlet from './content/Settings/OutletSetup/NewOutlet'
import Library from './content/Settings/Library'
import Ingredients from './content/Inventory/Ingredients'
import NewIngredient from './content/Inventory/Ingredients/NewIngredient'
import Sales from './content/Sales'
import Menu from './content/Menu'
import ViewRecipe from './content/Recipes/ViewRecipe'
import EditRecipe from './content/Recipes/EditRecipe'

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
                <Route path="sales" element={<Sales />} />
                <Route path="menu" element={<Menu />} />

                <Route
                    path="settings/employee-setup"
                    element={<EmployeeSetup />}
                />
                <Route path="settings/new-employee" element={<NewEmployee />} />
                <Route path="update-employee" element={<UpdateEmployee />} />
                <Route
                    path="settings/employee-role"
                    element={<EmployeeRole />}
                />

                <Route path="outlet-setup" element={<OutletSetup />} />
                <Route path="new-outlet" element={<NewOutlet />} />

                <Route path="settings/library" element={<Library />} />

                <Route path="inventory" element={<Inventory />} />

                <Route path="inventory/ingredients" element={<Ingredients />} />
                <Route
                    path="inventory/ingredients/new"
                    element={<NewIngredient />}
                />

                <Route path="suppliers" element={<Suppliers />} />
                <Route path="view-supplier" element={<ViewSupplier />} />
                <Route path="orders" element={<Orders />} />
                <Route path="order-list" element={<OrderList />} />
                <Route path="delivered" element={<Delivered />} />
                <Route path="reports" element={<Reports />} />
                <Route path="recipes" element={<Recipes />} />
                <Route path="new-recipe" element={<NewRecipe />} />
                <Route path="recipes/:name" element={<ViewRecipe/>} />
                <Route path="recipes/:name/edit" element={<EditRecipe/>} />


            </Routes>
        </div>
    )
}

export default App
