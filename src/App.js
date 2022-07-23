import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './components/AccountsComponent/SignUp';
import PassReset from './components/AccountsComponent/PassReset';
import Signin from './components/AccountsComponent/Signin';
import DashboardLayout from './components/DashboardsComponents/Dashboard';
import Home from './components/DashboardsComponents/pages/Home';
import Inventory from './components/DashboardsComponents/pages/Inventory';
import Reports from './components/DashboardsComponents/pages/Reports';
import Settings from './components/DashboardsComponents/pages/Settings';
import AddRole from './components/Settings/pages/AddRole';

import * as ROUTES from "./constants/routes";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//           <Routes>
//             <Route path={ROUTES.HOME} element={<Signin />} />
//             <Route path={ROUTES.SIGNUP} element={<SignUp/>} />
//             <Route path={ROUTES.PASS_RESET} element={<PassReset/>} />
//             <Route path={ROUTES.DASHBOARD} element={<Home />} />
//             <Route path={ROUTES.INVENTORY} element={<Inventory />} />
//             <Route path={ROUTES.REPORTS} element={<Reports />} />
//             <Route path={ROUTES.SETTINGS} element={<Settings />} />
//             <Route path={ROUTES.ADDROLE} element={<AddRole />} />
//           </Routes>
//         </Router>
//       </div>
//     )
//   }
// }

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<Signin />} />
          <Route path={ROUTES.SIGNUP} element={<SignUp/>} />
          <Route path={ROUTES.PASS_RESET} element={<PassReset/>} />
          <Route path={ROUTES.DASHBOARD} element={<Home />} />
          <Route path={ROUTES.INVENTORY} element={<Inventory />} />
          <Route path={ROUTES.REPORTS} element={<Reports />} />
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
          <Route path={ROUTES.ADDROLE} element={<AddRole />} />
        </Routes>
      </Router>
    </div>
  )
}