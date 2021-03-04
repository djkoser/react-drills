import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';
export default class App extends Component {
  constructor () {
    super();
    this.state = {
      userInput:"",
      toDoList:[],
    }
    this.removeListItem = this.removeListItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.addListItem = this.addListItem.bind(this);
  };

  handleInput(value) {
    this.setState({
      userInput: value
    })
  }
  removeListItem(key) {
    let toDoListRemoved = this.state.toDoList.slice();
    toDoListRemoved.splice(key,1); 
    this.setState({
      toDoList:toDoListRemoved
    }) 
  }
  addListItem() {
    let addArray = this.state.toDoList.slice(); 
    addArray.push(this.state.userInput);
    this.setState({
      toDoList:addArray,
      userInput:""
    })
  }

  render () {
    const toDoItems = this.state.toDoList.map((element,index) => (<Todo remove={this.removeListItem} index={index} element={element}/>))
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ol>
          {toDoItems}
        </ol>
        <input type='text' placeholder='Enter ToDo Here' value={this.state.userInput} onChange={e=>this.handleInput(e.target.value)} ></input>
        <button onClick={this.addListItem}>Add</button>
      </header>
    </div>
    )
  }
}

