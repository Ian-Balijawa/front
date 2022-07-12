import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './components/AccountsComponent/SignUp';
import PassReset from './components/AccountsComponent/PassReset';
import Signin from './components/AccountsComponent/Signin';
import DashboardLayout from './components/DashboardsComponents/Dashboard';

export default class App extends Component {
  render() {
    return (
        <div>
          <Router>
            <Routes>
              <Route path='/' element={<Signin />} />
              <Route path='/dashboard' element={<DashboardLayout />} />
            </Routes>
          </Router>
          {/* <Signin /> */}
          {/* <SignUp /> */}
          {/* <PassReset /> */}
        </div>
    )
  }
}
