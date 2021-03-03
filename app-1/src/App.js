import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputBox from './Components/InputBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <InputBox/>
      </header>
    </div>
  );
}

export default App;
