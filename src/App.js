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
import OutletsDashBoard from './content/Inventory/Outlets/OutletsDashBoard'
import OutletPreparation from './content/Inventory/Outlets/OutletPreparation'
import NewPreparationRecord from './content/Inventory/Outlets/NewPreparationRecord'
import CountsDashBoard from './content/Inventory/Counts/CountDashBoard'
import CountsDashBoardPopulated from './content/Inventory/Counts/CountsDashBoardPopulated'
import InventoryStockDashboard from './content/Inventory/Stock/InventoryStockDashboard'
import StockHistory from './content/Inventory/Stock/StockHistory'
import CountsInventory from './content/Inventory/Stock/CountsInventory'
import CountsEventsNtinda from './content/Inventory/Stock/CountsEventNtinda'
import {Counter} from './features/counter/counter'

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
                <Route path="/inventory/recipes" element={<Recipes />} />
                <Route path="/inventory/recipe/new" element={<NewRecipe />} />
                <Route
                    path="/inventory/recipes/:name"
                    element={<ViewRecipe />}
                />
                <Route
                    path="/inventory/recipes/:name/edit"
                    element={<EditRecipe />}
                />
                <Route
                    path="/inventory/outlets"
                    element={<OutletsDashBoard />}
                />
                <Route
                    path="/inventory/preparation/:outletId"
                    element={<OutletPreparation />}
                />
                <Route path="/inventory/counts" element={<CountsDashBoard />} />
                <Route
                    path="/inventory/counts-populated"
                    element={<CountsDashBoardPopulated />}
                />
                <Route
                    path="/inventory/view-stock"
                    element={<InventoryStockDashboard />}
                />
                <Route
                    path="/inventory/stock-history"
                    element={<StockHistory />}
                />
                <Route
                    path="/inventory/counts-inventory"
                    element={<CountsInventory />}
                />
                <Route
                    path="/inventory/counts-event-ntinda"
                    element={<CountsEventsNtinda />}
                />

                <Route
                    path="/inventory/preparation/new"
                    element={<NewPreparationRecord />}
                />
                <Route path="/counter" element={<Counter />} />
            </Routes>
        </div>
    )
}

export default App
