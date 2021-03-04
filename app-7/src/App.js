import React, {Component} from 'react';
import List from './Components/List';
import NewTask from './Components/NewTask'

import './App.css';

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      toDoList:[]
    }

    this.addListItem = this.addListItem.bind(this)
    
  }

  addListItem(finalizedArray) {
      this.setState({
        toDoList:finalizedArray
    });
  };

  removeListItem(key) {
    let shortenedList = this.state.toDoList.slice();
    shortenedList.splice(key,1);
    this.setState({
      toDoList:shortenedList
    })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <List/>
          <NewTask/>
        </header>
      </div>
    );
  }
};

