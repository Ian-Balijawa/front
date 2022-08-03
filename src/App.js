import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from './components/AccountsComponent/SignUp'
import PassReset from './components/AccountsComponent/PassReset'
import Signin from './components/AccountsComponent/Signin'
import Home from './components/DashboardsComponents/pages/Home'
import Inventory from './components/DashboardsComponents/pages/Inventory'
import Reports from './components/DashboardsComponents/pages/Reports'
import Settings from './components/DashboardsComponents/pages/Settings'
import AddRole from './components/Settings/pages/AddRole'
import * as ROUTES from './constants/routes'
import {
    AddNewRecipe,
    SearchForRecipe,
    SearchForIngredients,
    SelectOutLet,
    ViewPreparations,
} from './screens'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path={ROUTES.NEW_RECIPE} element={<AddNewRecipe />} />
                <Route
                    path={ROUTES.SEARCH_RECIPE}
                    element={<SearchForRecipe />}
                />
                <Route
                    path={ROUTES.SEARCH_INGREDIENTS}
                    element={<SearchForIngredients />}
                />
                <Route
                    path={ROUTES.VIEW_PREPARATIONS}
                    element={<ViewPreparations />}
                />
                <Route path={ROUTES.SELECT_OUTLET} element={<SelectOutLet />} />
                <Route path={ROUTES.HOME} element={<Signin />} />
                <Route path={ROUTES.SIGNUP} element={<SignUp />} />
                <Route path={ROUTES.PASS_RESET} element={<PassReset />} />
                <Route path={ROUTES.DASHBOARD} element={<Home />} />
                <Route path={ROUTES.INVENTORY} element={<Inventory />} />
                <Route path={ROUTES.REPORTS} element={<Reports />} />
                <Route path={ROUTES.SETTINGS} element={<Settings />} />
                <Route path={ROUTES.ADDROLE} element={<AddRole />} />
            </Routes>
        </Router>
    )
}
