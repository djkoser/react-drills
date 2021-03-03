import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';

export default class App extends Component {
  constructor () {
    super(); 
    this.state={
      username:"",
      password:""
    }
    // this.usernameChange()=this.usernameChange.bind(this);
    // this.passwordChange()=this.passwordChange.bind(this);

    // this.alertUser()= this.alertUser.bind(this);
  }

  usernameChange(value) {
    this.setState({
      username:value
    })
  };
  passwordChange(value) {
    this.setState({
      password:value
    })
  };

  alertUser() {
    if (this.state.username===""||this.state.password==="") {
      window.alert("Please enter a username and password.")
    } else {
      window.alert(`You have submitted a username of ${this.state.username} and a password of ${this.state.password}.`)
    };
  };

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    )
  };
};
