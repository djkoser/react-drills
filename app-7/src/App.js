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

    this.addListItem = this.addListItem.bind(this);
    this.removeListItem = this.removeListItem.bind(this);
    
  }

  addListItem(title,description) {
    const newToDoObject = {title,description};
    const toDoListCopy = this.state.toDoList.slice()
    toDoListCopy.push(newToDoObject);
    this.setState({
        toDoList:toDoListCopy
    });
  };

  removeListItem(key) {
    let shortenedList = this.state.toDoList.slice();
    shortenedList.splice(key,1);
    this.setState({
      toDoList: shortenedList
    })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <List toDoListState={this.state.toDoList} removeList={()=>this.removeListItem}/>
          <NewTask addTask={this.addListItem}/>
        </header>
      </div>
    );
  }
};

