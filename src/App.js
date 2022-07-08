import React, { Component } from 'react';
import SignUp from './components/AccountsComponent/SignUp';
import PassReset from './components/AccountsComponent/PassReset';
import Signin from './components/AccountsComponent/Signin';

export default class App extends Component {
  render() {
    return (
        <div>
          {/* <Signin /> */}
          {/* <SignUp /> */}
          <PassReset />
        </div>
    )
  }
}
