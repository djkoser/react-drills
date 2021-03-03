import React, {Component} from 'react';
import './App.css';
import Image from './Components/Image'

class App extends Component() {
  constructor() {
    super(); 
    this.state = {
      imageURL:"https://via.placeholder.com/150/FFFF00/000000?Text=David's Website"
    };
  };

  render () {
    return (
    <div className="App">
      <header className="App-header">
        <Image pic={this.state.imageURL}/>
      </header>
    </div>
    )
  };
};

export default App
