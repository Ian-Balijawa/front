import React, { Component } from 'react';
import Login from './components/AccountsComponent/Login';
import SignUp from './components/AccountsComponent/SignUp';
import Pass from './components/AccountsComponent/Pass';

export default class App extends Component {
  render() {
    return (
        <div>
          {/* <Login /> */}
          <SignUp />
          {/* <Pass /> */}
        </div>
    )
  }
}
